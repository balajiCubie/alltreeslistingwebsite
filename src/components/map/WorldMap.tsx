"use client"

import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import regions from "../../data/regions.json"
import Link from "next/link"
import { useState } from "react"
import { GeoJSONFeature } from "topojson-client"

interface Region {
  code: string;
  name: string;
  speciesCount: number;
  endangeredCount: number;
  thumbnail: string;
}

export default function WorldMap() {
  const [tooltipContent, setTooltipContent] = useState("")

  return (
    <div className="relative">
      <ComposableMap
        projectionConfig={{ scale: 150 }}
        onMouseEnter={() => setTooltipContent("")}
        onMouseLeave={() => setTooltipContent("")}
      >
        <Geographies geography="/world-110m.json">
          {({ geographies }: { geographies: GeoJSONFeature[] }) =>
            geographies.map((geo: GeoJSONFeature) => {
              const regionData = (regions as Region[]).find(
                (r) => r.code === (geo.properties as any).ISO_A2
              )
              return (
                <Link
                  href={`/trees?region=${(geo.properties as any).NAME}`}
                  key={geo.rsmKey}
                >
                  <Geography
                    geography={geo}
                    fill={regionData ? "#4CAF50" : "#EEE"}
                    stroke="#FFF"
                    onMouseEnter={() => {
                      setTooltipContent(
                        `${(geo.properties as any).NAME} - ${
                          regionData ? regionData.speciesCount : 0
                        } species`
                      )
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("")
                    }}
                    style={{
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                </Link>
              )
            })
          }
        </Geographies>
      </ComposableMap>
      {tooltipContent && (
        <div className="absolute bg-white p-2 rounded shadow-lg text-sm pointer-events-none"
             style={{ top: "10px", left: "10px" }}>
          {tooltipContent}
        </div>
      )}
    </div>
  )
}
