import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'select2/dist/css/select2.min.css'; // Import CSS của select2
import 'select2';

const CustomSelect = ({ id, name, className, options, onChange }) => {
    const selectRef = useRef(null);

    useEffect(() => {
        // Initialize Select2 on the select element with the provided id
        $(selectRef.current).select2({ theme: 'classic', width: '100%' });

        // Event handler for change
        $(selectRef.current).on('change', (e) => {
            onChange(e.target.value);
        });

        // Cleanup Select2 on unmount
        return () => {
            $(selectRef.current).select2('destroy');
        };
    }, [id, options, onChange]);

    return (
        <select ref={selectRef} className={className} id={id} name={name}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default CustomSelect;