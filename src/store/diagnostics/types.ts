import type { LayoutConfig } from '@/store/layout/types'

export interface DiagnosticsCardContainer {
  [key: string]: DiagnosticsCardConfig[]
}

export interface DiagnosticsCardConfig extends LayoutConfig {
  icon: string
  title: string
  height: number
  // zoom percent - so 10 would be default to the zoom being from 90% to 100%
  defaultZoom: number

  axes: ChartAxis[]
}

export interface ChartAxis {
  enabled: boolean
  unit: string
  min?: number
  max?: number
  showLegend: boolean

  metrics: Metric[]
}

export interface Metric {
  collector: string
  name: string
  style: MetricStyle
}

export interface MetricStyle {
  lineColor: string
  lineStyle: 'solid' | 'dashed' | 'dotted'
  fillColor: string | null
  fillOpacity: number
  displayLegend: boolean
}
