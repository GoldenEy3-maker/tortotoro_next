import {
  CategoryScale,
  ChartArea,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  ChartType,
  Filler,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js"
import { useRef, useState } from "react"
import { Chart } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  Tooltip,
  Filler
)

interface CustomChartProps {
  width?: number
  height?: number
  options?: ChartOptions
  data: ChartData
  type?: ChartType
  gradiant?: {
    top: {
      offset: number
      color: string
    }
    bottom: {
      offset: number
      color: string
    }
  }
}

function CustomChart({
  width,
  height,
  options,
  data,
  type = "line",
  gradiant,
}: CustomChartProps) {
  const [chartData, setChartData] = useState<ChartData>({
    ...data,
  })

  function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
    if (ctx) {
      const canvasGradiant = ctx.createLinearGradient(
        0,
        area.top,
        0,
        area.bottom
      )

      if (gradiant) {
        canvasGradiant.addColorStop(gradiant.top.offset, gradiant.top.color)
        canvasGradiant.addColorStop(
          gradiant.bottom.offset,
          gradiant.bottom.color
        )
      }

      return canvasGradiant
    }
  }

  return (
    <Chart
      type={type}
      ref={(node) => {
        if (node && gradiant) {
          setChartData((prev) => ({
            ...prev,
            datasets: prev.datasets.map((dataset) => ({
              ...dataset,
              backgroundColor: createGradient(node.ctx, node.chartArea),
            })),
          }))
        }
      }}
      options={{
        ...options,
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            border: {
              dash: [4, 8],
            },
          },
        },
      }}
      data={chartData}
      width={width}
      height={height}
    />
  )
}

export default CustomChart
