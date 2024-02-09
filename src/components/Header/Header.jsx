import logo from '/logologo.svg'
import city from '/citycity.png'

export default function Header() {
    return (
        <header>
            <img src={ logo } alt="Клуб четырех коней" />
            <><h1>Превратите <br />уездный город <span className="head_center">в столицу <br />земного шара</span></h1></>
            <p className="intro">Оплатите взнос на телеграммы для организации <br /> Международного васюкинского турнира по шахматам</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button className='but_1'>Поддержать <br /> шахматную мысль</button>
            <button className='but_2'>Подробнее <br /> о турнире</button>

        </header>
    )
}