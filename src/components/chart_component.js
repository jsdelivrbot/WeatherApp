import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

function showCorrectData(data, type) {
    if (type && type === 'temp') {
        let avgK = _.round(_.sum(data) / data.length),
            avgF = _.round((9 / 5) * (avgK - 273) + 32),
            avgC = _.round((5 / 9) * (avgF - 32));
        return avgK + '/' + avgF + '/' + avgC;
    } else {
        return average(data);
    }
}

export default (props) => {
     return (
        <div>
             <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
             </Sparklines>
             <div>{showCorrectData(props.data, props.infoType)}</div>
        </div>
     );
}
