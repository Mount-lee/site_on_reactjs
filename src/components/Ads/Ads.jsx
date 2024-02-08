import fisher from '/fisher.png'
import many from '/many.png'

export default function Ads () {
    return (
        <div className="ads">
            <h3>Чтобы поддержать <br />Международный васюкинский <br />турнир посетите лекцию на тему: <br /><q className='red_col'>Плодотворная дебютная идея</q></h3>
            <img src={ many } alt="" />
            <img className='fis_1' src={ fisher } alt="" />
            <h4 className='pos_right'>и Сеанс <span className='red_col'>одновременной игры <br />в шахматы на 160 досках<br /></span> гроссмейстера О. Бендера</h4>
            
        </div>
    )
}