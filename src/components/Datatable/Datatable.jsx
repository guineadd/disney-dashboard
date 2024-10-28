import React, { useState, useEffect, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters, setSelected, setPagination, setFilter } from "../../redux/characterSlice";
import styles from "./Datatable.js";
import CharacterModal from "../CharacterModal/CharacterModal.jsx";
import Chart from "../Chart/Chart.jsx";

const Datatable = () => {
  const dispatch = useDispatch();
  const { data, pagination, filter, selected } = useSelector(state => state.characters);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const characterSearchRef = useRef(null);
  const columns = [
    {
      field: "name",
      headerName: "Character Name",
      headerAlign: "center",
      width: 300,
    },
    {
      field: "tvShows",
      headerName: "TV Shows",
      headerAlign: "center",
      cellClassName: "centered-cell",
      width: 200,
      valueGetter: data => data.length,
    },
    {
      field: "videoGames",
      headerName: "Video Games",
      headerAlign: "center",
      cellClassName: "centered-cell",
      width: 200,
      valueGetter: data => data.length,
    },
    // at the time of building this dashboard, the Disney API contained no allies and enemies for every listed character
    {
      field: "allies",
      headerName: "Allies",
      headerAlign: "center",
      width: 200,
      valueGetter: data => (data.length > 0 ? data.join(", ") : "This character has no allies =("),
    },
    {
      field: "enemies",
      headerName: "Enemies",
      headerAlign: "center",
      width: 200,
      valueGetter: data => (data.length > 0 ? data.join(", ") : "This characters has no enemies. They are loved! =)"),
    },
  ];

  const paginationChange = paginationModel => {
    dispatch(
      setPagination({
        currentPage: paginationModel.page + 1,
        pageSize: paginationModel.pageSize,
      })
    );
  };

  const handleCharacterSearch = eventOrValue => {
    const value = typeof eventOrValue === "string" ? eventOrValue : eventOrValue.target.value;

    dispatch(setFilter({ searchCharacter: value }));

    if (value === "") {
      dispatch(setPagination({ currentPage: 1, pageSize: pagination.pageSize }));
    }
  };

  const handleTvShowSearch = event => {
    dispatch(setFilter({ searchTvShow: event.target.value }));

    if (event.target.value === "") {
      dispatch(setPagination({ currentPage: 1, pageSize: pagination.pageSize }));
    }
  };

  const handleRowSelection = params => {
    if (selectedRowId === params.id) {
      setSelectedRowId(null);
      dispatch(setSelected(null));
    } else {
      setSelectedRowId(params.id);
      dispatch(setSelected(params.row));
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRowId(null);
    dispatch(setSelected(null));
  };

  const focusCharacterSearch = () => {
    if (characterSearchRef.current) {
      characterSearchRef.current.value = "";
      characterSearchRef.current.focus();
      handleCharacterSearch("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const filteredData = data.filter(character => {
    const characterMatch =
      filter.searchCharacter.trim() === "" || character.name.toLowerCase().includes(filter.searchCharacter.toLowerCase());
    const tvShowMatch =
      filter.searchTvShow.trim() === "" ||
      character.tvShows.some(tvShow => tvShow.toLowerCase().includes(filter.searchTvShow.toLowerCase()));

    return characterMatch && tvShowMatch;
  });

  const currentPageData = filteredData
    .sort((a, b) => (filter.sortBy === "name" ? a.name.localeCompare(b.name) : 0))
    .slice((pagination.currentPage - 1) * pagination.pageSize, pagination.currentPage * pagination.pageSize);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://api.disneyapi.dev/character");

      if (!response.ok) {
        throw new Error(`HTTP error. Status: ${response.status}`);
      }

      const rows = await response.json();

      dispatch(
        setCharacters({
          data: rows.data,
          totalItems: rows.info.count,
          totalPages: rows.info.totalPages,
        })
      );
    } catch (err) {
      console.error(`Failed to fetch character data: ${err}`);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div style={{ height: 800, alignSelf: "center" }}>
      {/* search input for character names */}
      <input
        ref={characterSearchRef}
        type="text"
        placeholder="Search for characters"
        value={filter.searchCharacter}
        onChange={handleCharacterSearch}
        style={styles.input}
      />

      {/* search input for TV shows */}
      <input type="text" placeholder="Search for TV shows" value={filter.searchTvShow} onChange={handleTvShowSearch} style={styles.input} />

      {/* datatable */}
      <DataGrid
        rows={currentPageData}
        getRowId={row => row._id}
        columns={columns}
        pageSizeOptions={[10, 20, 50, 100, 200, 500]}
        rowCount={filteredData.length}
        pagination
        paginationMode="server"
        onPaginationModelChange={paginationChange}
        onRowClick={handleRowSelection}
        sx={styles.dataGrid}
        rowSelectionModel={selectedRowId ? [selectedRowId] : []}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 50, page: 0 },
          },
        }}
      />

      {/* character pie chart */}
      <Chart characters={currentPageData} onFocusSearch={focusCharacterSearch} />

      {/* conditional character modal */}
      <CharacterModal open={modalOpen} onClose={handleCloseModal} character={selected} />
    </div>
  );
};

export default Datatable;
