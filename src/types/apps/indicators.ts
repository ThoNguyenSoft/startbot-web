interface BollingBand {
  date: string
  close: number
  code: string
  sma: number
  upper_band: number
  lower_band: number
}

interface MACD {
  date: string
  code: string
  macd: number
  signal: number
}

interface RSI {
  date: string
  code: string
  rsi: number
}

interface OBV {
  date: string
  code: string
  obv: number
}

interface VWAP {
  code: string
  vwap: number
}

interface BBQ {
  date: string
  code: string
  bull_power: number
  bear_power: number
}

export interface Indicators {
  bollingBand?: BollingBand[]
  macd?: MACD[]
  rsi?: RSI[]
  obv?: OBV[]
  vwap?: VWAP[]
  bbq?: BBQ[]
}
