import CollapsableCard from '../../../utils/Cards/CollapsableCard/CollapsableCard'

import css from './ExploreOptionsNearMe.module.css';

let ExploreOptionsNearMe = () => {
    let chain = ['Burger King', 'KFC', 'Pizza Hut', 'WOW! Momo'];
    let city = ['Delhi NCR','Kolkata','Mumbai','Bengaluru','Pune'];
    let cuisines = ['Bakery food near me','Beverages food near me','Biryani food near me','Burger food near me','Chinese food near me','Coffee food near me'];
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Explore options near me</div>
            <div className={css.cards}>
                <CollapsableCard title="Popular cuisines near me" content={cuisines} />
                <CollapsableCard title="Top Restaurant Chains" content={chain} />
                <CollapsableCard title="Cities We Deliver To" content={city} />
            </div>
        </div>
    </div>
}

export default ExploreOptionsNearMe;