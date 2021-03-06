import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';

function FilterGrayscale(props) {
    // Props, States
    const { updateOutput } = props;
    const [grayscale, setGrayscale] = useState(100);
    
    // Effects
    useEffect(() => {
        const style = { filter: `grayscale(${grayscale}%)` };
        const css = `filter: grayscale(${grayscale}%);`;
        updateOutput(style, css);
    }, [updateOutput, grayscale]);

    return (
        <MainSection extraClass="main__section-inputs" title="Filter Grayscale" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Grayscale (percent)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="100"
                            value={grayscale}
                            onChange={(e) => setGrayscale(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">100</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default FilterGrayscale;