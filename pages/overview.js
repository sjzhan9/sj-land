import Head from "next/head";
import util from "../styles/util.module.css";
import styles from "./overview.module.css";
const { Client } = require("@notionhq/client");
import React, { useState, useEffect, useCallback } from 'react';
import 'chart.js/auto'; 

import { Pie, Bar } from 'react-chartjs-2';
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";

import * as Tooltip from "@radix-ui/react-tooltip";

import Image from "next/image";

//import tooltip from "radix-ui/react-tooltip";





export default function Overview (list)  {

  const { data: session } = useSession();

  let portfolioChartLabels = {};
  let typeOfInvestmentLabels = {};
  let countOfInvestmentTypeLabels = {};
  let countOfInvestmentLocationLabels = {};
  let countOfInvestmentStageLabels = {};

  function getCountOfInvestmentLocationLabelDetails(list) {
    let labels = {};
    list.list.map((value) => {
      let location = value.properties.Location.multi_select[0].name;
      if (labels.hasOwnProperty(location)) {
        labels[location] += 1;
      } else {
        labels[location] = 1;
      }
    });
    return labels;
  }

  function getCountOfInvestmentStageLabelDetails(list) {
    let labels = {};
    list.list.map((value) => {
      let stage = value.properties.Stage.multi_select[0].name;
      if (labels.hasOwnProperty(stage)) {
        labels[stage] += 1;
      } else {
        labels[stage] = 1;
      }
    });
    return labels;
  }

  
  function getPortfolioLabelDetails(list) {
    let labels = {};
    console.log(list);
    list.list.map((value) => {
      let industryName = value.properties.Industry.multi_select[0].name;
      let color = value.properties.Industry.multi_select[0].color;
      let allocation = value.properties.Allocation.number;
      if (labels.hasOwnProperty(industryName)) {
        labels[industryName].numOfApperances += 1;
        labels[industryName].allocation += allocation;
      } else {
        labels[industryName] = {
          color: color,
          numOfApperances: 1,
          allocation: allocation
        };
      }
    });
    return labels;
  }



function getTypeOfInvestmentLabelDetails(list) {
    let labels = {};
    list.list.forEach((value) => {
      let date = new Date(value.created_time);
      let month = date.toLocaleString("default", { month: "long" });
      let year = date.getFullYear();
      let key = `${month} ${year}`;
      
      if (!labels[key]) {
        labels[key] = [{ "Alchemy Accelerator": 0 }, { "Alchemy Ventures": 0 }, { "Alchemy Accelerator & Alchemy Ventures": 0 }];
      }
      let type = value.properties.Type.multi_select;
      console.log(type);
      if (type.length === 1 && type[0].name === "Alchemy Accelerator") {
        labels[key][0]["Alchemy Accelerator"] += 1;
      } else if (type.length === 1 && type[0].name === "Alchemy Ventures") {
        labels[key][1]["Alchemy Ventures"] += 1;
      } else if (type.length === 2) {
        labels[key][2]["Alchemy Accelerator & Alchemy Ventures"] += 1;
      }
    });
    return labels;
  }

  function getTotalAmountOfInvestment(list) {
    let labels = {};
    list.list.forEach((value) => {
      let type = value.properties.Type.multi_select;
      if (type.length === 1 && type[0].name === "Alchemy Accelerator") {
        if (!labels["Alchemy Accelerator"]) {
          labels["Alchemy Accelerator"] = 0;
        }
        labels["Alchemy Accelerator"] += 1;
      } else if (type.length === 1 && type[0].name === "Alchemy Ventures") {
        if (!labels["Alchemy Ventures"]) {
          labels["Alchemy Ventures"] = 0;
        }
        labels["Alchemy Ventures"] += 1;
      } else if (type.length === 2) {
        if (!labels["Alchemy Accelerator & Alchemy Ventures"]) {
          labels["Alchemy Accelerator & Alchemy Ventures"] = 0;
        }
        labels["Alchemy Accelerator & Alchemy Ventures"] += 1;
      }
    });
    return labels;
  }

  
  

  
    if (session) {
        portfolioChartLabels = getPortfolioLabelDetails(list);
        typeOfInvestmentLabels = getTypeOfInvestmentLabelDetails(list);
        countOfInvestmentTypeLabels = getTotalAmountOfInvestment(list);
        countOfInvestmentLocationLabels = getCountOfInvestmentLocationLabelDetails(list);
        countOfInvestmentStageLabels = getCountOfInvestmentStageLabelDetails(list);
        console.log(countOfInvestmentStageLabels);
    }

    
    function convertHexToRGBA(hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
      }

    const colors = {
        'gray': '#e3e2e0',
        'brown': '#ece1db',
        'orange': '#f6dfcc',
        'yellow': '#faedcc',
        'green': '#dfeddd',
        'blue': '#d7e5ee',
        'purple': '#e6dfed',
        'pink': '#f2e1e9',
        'red': '#fae3de'
      }

      const rgbaColors = {
        'gray': convertHexToRGBA('#e3e2e0', 0.5),
        'brown': convertHexToRGBA('#ece1db', 0.5),
        'orange': convertHexToRGBA('#f6dfcc', 0.5),
        'yellow': convertHexToRGBA('#faedcc', 0.5),
        'green': convertHexToRGBA('#dfeddd', 0.5),
        'blue': convertHexToRGBA('#d7e5ee', 0.5),
        'purple': convertHexToRGBA('#e6dfed', 0.5),
        'pink': convertHexToRGBA('#f2e1e9', 0.5),
        'red': convertHexToRGBA('#fae3de', 0.5)
      }

    const newShade = (hexColor, magnitude) => {
    hexColor = hexColor.replace(`#`, ``);
    if (hexColor.length === 6) {
        const decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        let g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
        return hexColor;
    }
    };

    const [portfolioCount, setPortfolioCount] = useState(true);

    const portfolioData = {
        labels: Object.keys(portfolioChartLabels),
        datasets: [
          {
            data: portfolioCount 
              ? Object.values(portfolioChartLabels).map(label => label.numOfApperances)
              : Object.values(portfolioChartLabels).map(label => label.allocation),
            backgroundColor: Object.values(portfolioChartLabels).map(label => {
              if (typeof label.color === 'string' && rgbaColors[label.color]) {
                const color = colors[label.color];
                return newShade(color, -20);
              }
            }),
            borderColor: Object.values(portfolioChartLabels).map(label => {
              if (typeof label.color === 'string' && colors[label.color]) {
                const color = colors[label.color];
                return newShade(color, -50);
              }
            }),
            borderWidth: 1,
          },
        ]
      };

      const investmentLocationData = {
        labels: Object.keys(countOfInvestmentLocationLabels),
        datasets: [
            {
                label: 'USA',
                data: {USA: Object.values(countOfInvestmentLocationLabels)[0]},
                backgroundColor: 'rgba(54,63,249, 0.5)'
            },
            {
                label: 'Asia',
                data: {Asia: Object.values(countOfInvestmentLocationLabels)[1]},
                backgroundColor: 'rgba(54,63,249, 0.5)'
            },
            {
                label: 'Europe',
                data: {Europe: Object.values(countOfInvestmentLocationLabels)[2]},
                backgroundColor: 'rgba(54,63,249, 0.5)'
            },
            {
                label: 'Middle East',
                data: {'Middle East': Object.values(countOfInvestmentLocationLabels)[3]},
                backgroundColor: 'rgba(54,63,249, 0.5)'
            },
            {
                label: 'Canada',
                data: {'Canada': Object.values(countOfInvestmentLocationLabels)[4]},
                backgroundColor: 'rgba(54,63,249, 0.5)'
            },
            {
                label: 'LATAM',
                data: {LATAM: Object.values(countOfInvestmentLocationLabels)[5]},
                backgroundColor: 'rgba(54,63,249, 0.5)'
            },
            ]
        }

        const investmentStageData = {
            labels: Object.keys(countOfInvestmentStageLabels),
            datasets: [
                {
                    label: 'Pre-Seed',
                    data: {'Pre-Seed': Object.values(countOfInvestmentStageLabels)[5]},
                    backgroundColor: 'rgba(54,63,249, 0.5)'
                },
                {
                    label: 'Seed Round',
                    data: {'Seed Round': Object.values(countOfInvestmentStageLabels)[2]},
                    backgroundColor: 'rgba(54,63,249, 0.5)'
                },
                {
                    label: 'Series A',
                    data: {'Series A': Object.values(countOfInvestmentStageLabels)[0]},
                    backgroundColor: 'rgba(54,63,249, 0.5)'
                },
                {
                    label: 'Series B',
                    data: {'Series B': Object.values(countOfInvestmentStageLabels)[3]},
                    backgroundColor: 'rgba(54,63,249, 0.5)'
                },
                {
                    label: 'Series C',
                    data: {'Series C': Object.values(countOfInvestmentStageLabels)[1]},
                    backgroundColor: 'rgba(54,63,249, 0.5)'
                },
                {
                    label: 'Series D',
                    data: {'Series D': Object.values(countOfInvestmentStageLabels)[7]},
                    backgroundColor: 'rgba(54,63,249, 0.5)'
                },
                {
                    label: 'ICO',
                    data: {'ICO': Object.values(countOfInvestmentStageLabels)[4]},
                    backgroundColor: 'rgba(54,63,249, 0.5)'
                },
                {
                    label: 'NFT Drop',
                    data: {'NFT Drop': Object.values(countOfInvestmentStageLabels)[6]},
                    backgroundColor: 'rgba(54,63,249, 0.5)'
                },
                ]
            }

        const investmentLocationPieData = {
            labels: Object.keys(countOfInvestmentLocationLabels),
            datasets: [
              {
                data: [Object.values(countOfInvestmentLocationLabels)[0], Object.values(countOfInvestmentLocationLabels)[1], Object.values(countOfInvestmentLocationLabels)[2], Object.values(countOfInvestmentLocationLabels)[3], Object.values(countOfInvestmentLocationLabels)[4], Object.values(countOfInvestmentLocationLabels)[5]],
                backgroundColor: ['red', 'blue', 'green', 'purple', 'black', 'yellow'],
                borderColor: 'black',
                borderWidth: 1,
              },
            ],
          };
        
      


      const typeOfInvestmentData = {
              labels: Object.keys(typeOfInvestmentLabels),
              datasets: [
                {
                  label: 'Alchemy Ventures',
                  data: Object.values(typeOfInvestmentLabels).map(item => item[1]["Alchemy Ventures"]),
                  backgroundColor: 'rgba(54,63,249, 0.5)',
                },
                {
                  label: 'Alchemy Accelerator',
                  data: Object.values(typeOfInvestmentLabels).map(item => item[0]["Alchemy Accelerator"]),
                  backgroundColor: 'rgba(11, 194, 254, 0.5)',
                },
                {
                  label: 'AV + AA',
                  data: Object.values(typeOfInvestmentLabels).map(item => item[2]["Alchemy Accelerator & Alchemy Ventures"]),
                  backgroundColor: 'rgba(249, 196, 51, 0.5)',
                },
              ],
            };

            const typeOfInvestmentPieDataColors = ['rgba(54,63,249, 0.5)', 'rgba(249, 196, 51, 0.5)', 'rgba(11, 194, 254, 0.5)'];
    
            const typeOfInvestmentPieData = {
                labels: Object.keys(countOfInvestmentTypeLabels),
                datasets: [
                  {
                    data: Object.values(countOfInvestmentTypeLabels),
                    backgroundColor: typeOfInvestmentPieDataColors,
                    borderColor: typeOfInvestmentPieDataColors.map(color => newShade(color, -50)),
                    borderWidth: 1,
                  },
                ],
              };
            

      
      const [position, setPosition] = useState('right');

        const useMediaQuery = (width) => {
        
        const updatePosition = useCallback((e) => {
            if (e.matches) {
            setPosition('bottom');
            } else {
            setPosition('right');
            }
        }, []);

        useEffect(() => {
            const media = window.matchMedia(`(max-width: ${width}px)`);
            media.addListener(updatePosition);

            // Check on mount (callback is not called until a change occurs)
            if (media.matches) {
            setPosition('bottom');
            }

            return () => media.removeListener(updatePosition);
        }, []);

        return position;
        };

       const isBreakpoint = useMediaQuery(768);

    const portfolioChartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: position,
                labels: {
                    boxWidth: 20
                },
            },
        },
        layout: {
            padding: {
              left: 0,
              bottom: 0,
            }
        }
      }

      const investmentTypeOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: true,
            align: 'end',
            anchor: 'end',
            color: 'black'
          },
          legend: {
            position: 'right',
            labels: {
                boxWidth: 5
            },
          },
        },
      };

      const [isBarChart, setIsBarChart] = useState(true);
        const toggleChart = () => {
            setIsBarChart(!isBarChart);
        }   

      
     

    const description = "Overview of what we're building here at Alchemy Ventures.";
    return (
        <>
      <Head>
        <title>{"Alchemy Ventures Portfolio"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="icon.png" />{" "}
        <meta property="og:image" content="https://www.sj.land/og/index.png" />
      </Head>

      <main className={util.page} id="newslettersPage">
        <div className = {styles.grid}>
        
            <div className= {styles.grid1}>
                <h1 className={util.header}>Overview</h1>
                <p className={util.description}>{description}</p>
            </div>
            <div className={styles.grid2}>
                <div className = {styles.textWrapper}>
                    <div className = {styles.row}>
                                    <h2 className = {util.subheader}>Portfolio Breakdown</h2>
                                    <div className = {styles.optionRow}>
                                        <Tooltip.Provider delayDuration={500}>
                                            <Tooltip.Root>
                                                <Tooltip.Trigger asChild>
                                                    <div className={styles.logoIcon}>
                                                        <Image className = {"iconInvert"} src={"/feather/" + "verticals" + ".svg"} height={66} width={66} alt="request" onClick={() => setPortfolioCount(true)} />
                                                    </div>
                                                </Tooltip.Trigger>

                                                <Tooltip.Content className={util.tooltip}>
                                                    <p>Count</p>
                                                <Tooltip.Arrow className={util.arrow} />
                                                </Tooltip.Content>
                                            </Tooltip.Root>
                                            </Tooltip.Provider>

                                            <Tooltip.Provider delayDuration={500}>
                                            <Tooltip.Root>
                                                <Tooltip.Trigger asChild>
                                                    <div className={styles.logoIcon}>
                                                        <Image className = {"iconInvert"} src={"/feather/" + "piechart" + ".svg"} height={66} width={66} alt="request" onClick={() => setPortfolioCount(false)} />
                                                    </div>
                                                </Tooltip.Trigger>

                                                <Tooltip.Content className={util.tooltip}>
                                                    <p>Allocation Spread</p>
                                                <Tooltip.Arrow className={util.arrow} />
                                                </Tooltip.Content>
                                            </Tooltip.Root>
                                            </Tooltip.Provider>
                                    </div>
                                </div>
                                <p className={util.description}>Segmented by vertical.</p>
                    
                </div>
                <div className = {styles.pieChart}>
                    <div className = {styles.chart}>
                        <Pie data={portfolioData}  options={portfolioChartOptions} className = {styles.pieChart}/>
                    </div>
                </div>
            </div>
            <div className={styles.grid3}>

            <div className = {styles.textWrapper}>
                            <div className = {styles.row}>
                                <h2 className = {util.subheader}>Location of Investments</h2>
                                <div className = {styles.optionRow}>
                                    <Tooltip.Provider delayDuration={500}>
                                        <Tooltip.Root>
                                            <Tooltip.Trigger asChild>
                                                <div className={styles.logoIcon}>
                                                    <Image className = {"iconInvert"} src={"/feather/" + "barchart" + ".svg"} height={66} width={66} alt="request" onClick={() => setIsBarChart(true)} />
                                                </div>
                                            </Tooltip.Trigger>

                                            <Tooltip.Content className={util.tooltip}>
                                                <p>Bar Chart</p>
                                            <Tooltip.Arrow className={util.arrow} />
                                            </Tooltip.Content>
                                        </Tooltip.Root>
                                        </Tooltip.Provider>

                                        <Tooltip.Provider delayDuration={500}>
                                        <Tooltip.Root>
                                            <Tooltip.Trigger asChild>
                                                <div className={styles.logoIcon}>
                                                    <Image className = {"iconInvert"} src={"/feather/" + "piechart" + ".svg"} height={66} width={66} alt="request" onClick={() => setIsBarChart(false)} />
                                                </div>
                                            </Tooltip.Trigger>

                                            <Tooltip.Content className={util.tooltip}>
                                                <p>Pie Chart</p>
                                            <Tooltip.Arrow className={util.arrow} />
                                            </Tooltip.Content>
                                        </Tooltip.Root>
                                        </Tooltip.Provider>
                                </div>
                            </div>
                            <p className={util.description}>Continent / Country.</p>
                        </div>
                        <div className = {styles.pieChart}>
                            <div className = {styles.chart}>
                                {isBarChart ? <Bar data = {investmentLocationData} options = {investmentTypeOptions} className = {styles.barChart}/> : <Pie data = {investmentLocationPieData} options = {portfolioChartOptions} className = {styles.pieChart} /> }
                            </div>
                        </div>    

               
            </div>
            <div className={styles.grid4}>
                        <div className = {styles.textWrapper}>
                            <div className = {styles.row}>
                                <h2 className = {util.subheader}>Types of Investments</h2>
                                <div className = {styles.optionRow}>
                                    <Tooltip.Provider delayDuration={500}>
                                        <Tooltip.Root>
                                            <Tooltip.Trigger asChild>
                                                <div className={styles.logoIcon}>
                                                    <Image className = {"iconInvert"} src={"/feather/" + "barchart" + ".svg"} height={66} width={66} alt="request" onClick={() => setIsBarChart(true)} />
                                                </div>
                                            </Tooltip.Trigger>

                                            <Tooltip.Content className={util.tooltip}>
                                                <p>Bar Chart</p>
                                            <Tooltip.Arrow className={util.arrow} />
                                            </Tooltip.Content>
                                        </Tooltip.Root>
                                        </Tooltip.Provider>

                                        <Tooltip.Provider delayDuration={500}>
                                        <Tooltip.Root>
                                            <Tooltip.Trigger asChild>
                                                <div className={styles.logoIcon}>
                                                    <Image className = {"iconInvert"} src={"/feather/" + "piechart" + ".svg"} height={66} width={66} alt="request" onClick={() => setIsBarChart(false)} />
                                                </div>
                                            </Tooltip.Trigger>

                                            <Tooltip.Content className={util.tooltip}>
                                                <p>Pie Chart</p>
                                            <Tooltip.Arrow className={util.arrow} />
                                            </Tooltip.Content>
                                        </Tooltip.Root>
                                        </Tooltip.Provider>
                                </div>
                            </div>
                            <p className={util.description}>Core and Accelerator.</p>
                        </div>
                        <div className = {styles.pieChart}>
                            <div className = {styles.chart}>
                                {isBarChart ? <Bar data = {typeOfInvestmentData} options = {investmentTypeOptions} className = {styles.barChart}/> : <Pie data = {typeOfInvestmentPieData} options = {portfolioChartOptions} className = {styles.pieChart} /> }
                            </div>
                        </div>    
            </div>

            <div className={styles.grid5}>
            <div className = {styles.textWrapper}>
                            <div className = {styles.row}>
                                <h2 className = {util.subheader}>Stage of Investments</h2>
                                <div className = {styles.optionRow}>
                                    <Tooltip.Provider delayDuration={500}>
                                        <Tooltip.Root>
                                            <Tooltip.Trigger asChild>
                                                <div className={styles.logoIcon}>
                                                    <Image className = {"iconInvert"} src={"/feather/" + "barchart" + ".svg"} height={66} width={66} alt="request" onClick={() => setIsBarChart(true)} />
                                                </div>
                                            </Tooltip.Trigger>

                                            <Tooltip.Content className={util.tooltip}>
                                                <p>Bar Chart</p>
                                            <Tooltip.Arrow className={util.arrow} />
                                            </Tooltip.Content>
                                        </Tooltip.Root>
                                        </Tooltip.Provider>

                                        <Tooltip.Provider delayDuration={500}>
                                        <Tooltip.Root>
                                            <Tooltip.Trigger asChild>
                                                <div className={styles.logoIcon}>
                                                    <Image className = {"iconInvert"} src={"/feather/" + "piechart" + ".svg"} height={66} width={66} alt="request" onClick={() => setIsBarChart(false)} />
                                                </div>
                                            </Tooltip.Trigger>

                                            <Tooltip.Content className={util.tooltip}>
                                                <p>Pie Chart</p>
                                            <Tooltip.Arrow className={util.arrow} />
                                            </Tooltip.Content>
                                        </Tooltip.Root>
                                        </Tooltip.Provider>
                                </div>
                            </div>
                            <p className={util.description}>Pre-Seed To Series D.</p>
                        </div>
                        <div className = {styles.pieChart}>
                            <div className = {styles.chart}>
                                {isBarChart ? <Bar data = {investmentStageData} options = {investmentTypeOptions} className = {styles.barChart}/> : <Pie data = {investmentLocationPieData} options = {portfolioChartOptions} className = {styles.pieChart} /> }
                            </div>
                        </div>    

                
                
             </div>
        </div>
      </main>
    </>
    )
}


export async function getStaticProps() {

    const alchemy_notion = new Client({ auth: process.env.ALCHEMOTION_API_KEY});
  
    const portfolioListResponse = await alchemy_notion.databases.query({
      database_id: process.env.NOTION_PORTFOLIOLIST_ID,
      sorts: [
        {
          property: "Created",
          direction: "ascending",
        },
      ],
    });
  
    return {
      props: {
        list: portfolioListResponse.results,
      },
      revalidate: 5,
    };
  }