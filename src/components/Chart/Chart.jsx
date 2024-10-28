import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as XLSX from "xlsx";
import { motion } from "framer-motion";
import styles from "./Chart.js";
import theme from "../../shared/theme.js";

const Chart = ({ characters, onFocusSearch }) => {
  const [chartOptions, setChartOptions] = useState({});
  const [chartHasData, setChartHasData] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  Highcharts.setOptions({
    accessibility: {
      enabled: false,
    },
  });

  const exportToXlsx = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      characters.map(character => ({
        Name: character.name,
        Films: character.films.join(", "),
        Count: character.films.length,
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Character films");
    XLSX.writeFile(workbook, "Character Films.xlsx");
  };

  useEffect(() => {
    const chartData = characters
      // do not display characters that did not participate in any film - can be removed to include all characters
      .filter(character => character.films.length > 0)
      .map(character => ({
        name: character.name,
        y: character.films.length,
        films: character.films.length > 0 ? character.films.join(", ") : "None",
      }));

    setChartHasData(chartData.length > 0);

    setChartOptions({
      chart: {
        type: "pie",
        backgroundColor: null,
      },
      title: {
        text: "Character Film Appearances",
        style: {
          color: theme.palette.primary.main,
          fontSize: "2rem",
          fontWeight: "normal",
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
          opacity: chartData.length > 0 ? 1 : 0,
        },
      },
      tooltip: {
        pointFormatter() {
          return `
            <strong>${this.percentage.toFixed(2)}%</strong>
            <br/>
            <strong>Films</strong>: ${this.films}
          `;
        },
        style: {
          fontSize: "1.2rem",
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
        },
      },
      plotOptions: {
        pie: {
          size: "80%",
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: `{point.name}: {point.y} films`,
            style: {
              fontSize: "1.2rem",
              fontFamily: '"Comic Sans MS", cursive, sans-serif',
            },
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Films",
          colorByPoint: true,
          data: chartData.length > 0 ? chartData : [],
          dataLabels: {
            style: {
              fontFamily: '"Comic Sans MS", cursive, sans-serif',
            },
          },
        },
      ],
    });
  }, [characters]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "1rem auto",
      }}
    >
      {chartHasData ? (
        <>
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          <button onClick={exportToXlsx} style={styles.exportButton}>
            Export as .xlsx
          </button>
        </>
      ) : (
        <motion.button
          style={{
            ...styles.noDataButton,
            backgroundColor: buttonHovered ? theme.palette.primary.darkHover : theme.palette.primary.dark,
          }}
          onClick={() => {
            onFocusSearch();
            setButtonHovered(false);
          }}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
          animate={{
            backgroundColor: buttonHovered
              ? theme.palette.primary.darkHover
              : [theme.palette.primary.dark, theme.palette.primary.light, theme.palette.primary.dark],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          There are no data. Tap to search again =)
        </motion.button>
      )}
    </div>
  );
};

export default Chart;
