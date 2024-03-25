import {getBySelector} from '@cloudwalker/dom-utils'
import ReactDOM from 'react-dom/client'

import './tailwind.css'

import {App} from './App'

ReactDOM.createRoot(getBySelector('#root')).render(<App />)
