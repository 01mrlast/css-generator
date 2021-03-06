import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';

function FilterHueRotate(props) {
    // Props, States
    const { updateOutput } = props;
    const [hueRotate, setHueRotate] = useState(180);
    
    // Effects
    useEffect(() => {
        const style = { filter: `hue-rotate(${hueRotate}deg)` };
        const css = `filter: hue-rotate(${hueRotate}deg);`;
        updateOutput(style, css);
    }, [updateOutput, hueRotate]);

    return (
        <MainSection extraClass="main__section-inputs" title="Filter Hue-Rotate" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Hue-Rotate (degrees)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="360"
                            value={hueRotate}
                            onChange={(e) => setHueRotate(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">360</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default FilterHueRotate;