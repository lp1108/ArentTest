// project imports
import BodyFatPercentageGraph from './body-fat-percentage-graph';
import ButtonTransits from './button-transit-input';
import { useMealRecord } from '../../context/meal-record-context';
// asset
import MealHistory from './meal-history';

// css
import '../../css/fontFamily.css'
import CustomButton from '../../ui-component/CustomButton';
const TopPage = () => {
    const { getMoreRecord } = useMealRecord();

    return (
        <div>
            <BodyFatPercentageGraph />
            <ButtonTransits />
            <MealHistory />
            <CustomButton text={'記録をもっと見る'} handleClick={getMoreRecord} />
        </div>

    );
}


export default TopPage;
