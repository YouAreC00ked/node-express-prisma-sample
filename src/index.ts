import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import vendorRoutes from './routes/vendor.routes.js'
import studioRoutes from './routes/studio.routes.js'
import movieRoutes from './routes/movie.routes.js'
import movieCodeRoutes from './routes/movieCode.routes.js'
import customerRoutes from './routes/customer.routes.js'
import saleRoutes from './routes/sale.routes.js'
import historyRoutes from './routes/history.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/vendors', vendorRoutes)
app.use('/studios', studioRoutes)
app.use('/movies', movieRoutes)
app.use('/movie-codes', movieCodeRoutes)
app.use('/customers', customerRoutes)
app.use('/sales', saleRoutes)
app.use('/history', historyRoutes)

const server = app.listen(3000, () =>
  console.log(`Server ready at: http://localhost:3000`),
)
