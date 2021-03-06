import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';

function FilterBrightness(props) {
    // Props, States
    const { updateOutput } = props;
    const [brightness, setBrightness] = useState(135);
    
    // Effects
    useEffect(() => {
        const style = { filter: `brightness(${brightness}%)` };
        const css = `filter: brightness(${brightness}%);`;
        updateOutput(style, css);
    }, [updateOutput, brightness]);

    return (
        <MainSection extraClass="main__section-inputs" title="Filter Brightness" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Brightness (percent)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="300"
                            value={brightness}
                            onChange={(e) => setBrightness(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">300</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default FilterBrightness;