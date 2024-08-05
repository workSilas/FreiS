import Home from './pages/home'
import Sobre from './pages/sobre'
import Exercício1 from './pages/exercicio1'
import Exercício2 from './pages/exercicio2'
import Exercício3 from './pages/exercicio3'
import Exercício4 from './pages/exercicio4'
import Exercício5 from './pages/exercicio5'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Estrutura() {
    return (
    <BrowserRouter>
        <Routes> 
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Sobre' element={<Sobre/>}/>
            <Route path='/Exercicio1' element={<Exercício1/>}/>
            <Route path='/Exercicio2' element={<Exercício2/>}/>
            <Route path='/Exercicio3' element={<Exercício3/>}/>
            <Route path='/Exercicio4' element={<Exercício4/>}/>
            <Route path='/Exercicio5' element={<Exercício5/>}/>
        </Routes> 
    </BrowserRouter>
    )
} 