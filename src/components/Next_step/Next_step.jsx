import plane from '/1plane.png'

export default function Next_step () {
    return (
        <div className="Next_step">
            <h1>
                Этапы преображения Васюков
            </h1>

            <div className="first"><span>Строительство <br /> железнодорожной <br /> магистрали Москва-Васюки</span></div>
            <div className="second"><span>Открытие фешенебельной <br /> гостиницы «Проходная <br /> пешка» и других небоскрёбов</span></div>
            <div className="third"><span>Поднятие сельского <br />хозяйства в радиусе <br /> на тысячу километров: <br /> производство овощей, <br /> фруктов, икры, шоколадных <br />конфет</span></div>
            <div className="fourth"><span>Строительство дворца <br /> для турнира</span></div>
            <div className="fifth"><span>Размещение гаражей <br /> для гостевого <br /> автотранспорта</span></div>
            <div className="sixth"><span>Постройка сверхмощной <br /> радиостанции для передачи <br />всему миру сенсационных <br />результатов</span></div>
            <div className="seventh"><span>Создание аэропорта «Большие Васюки» <br />с регулярным отправлением почтовых <br />самолётов и дирижаблей во все концы <br />света, включая Лос-Анжелос и Мельбурн</span></div>
            {/* <div className='none'><img className='plane' src={ plane } alt="" /></div> */}
        </div>
    )
}