import chess_player from '/chess_player.png'

export default function Members () {
    return (
        <div className="Members">
            <div><h1>Участники турнира</h1></div> 
            <div className="slide"><img src={ chess_player } alt="" /> <br /> <br /> <br /><span>Хосе-Рауль Капабланка</span><br /><p>Чемпион мира по шахматам</p><br /><button className='more'>Подробнее</button></div>
            <div className="slide"><img src={ chess_player } alt="" /> <br /> <br /> <br /><span>Эммануил Ласкер</span><br /><p>Чемпион мира по шахматам</p><br /><button className='more'>Подробнее</button></div>
            <div className="slide"><img src={ chess_player } alt="" /> <br /> <br /> <br /><span>Александр Алехин</span><br /><p>Чемпион мира по шахматам</p><br /><button className='more'>Подробнее</button></div>
        </div>
    )
}