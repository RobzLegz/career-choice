import React from 'react'
import { useSelector } from 'react-redux';
import { languageData } from '../../../redux/slices/languageSlice';

function FindHeadingContainer() {
    const languageInfo = useSelector(languageData);

    return (
        <div className="py-5">
            <h2>{languageInfo.text.find.header.heading}</h2>
        </div>
    )
}

export default FindHeadingContainer
