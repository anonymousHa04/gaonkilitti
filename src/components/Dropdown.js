import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = ["Buyed Items", "Sold Items"];
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [])

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="dropdown-button">
                {selectedOption || title}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}

                    <li onClick={() => {
                        setSelectedOption(null)
                        setIsOpen(false);
                    }
                    } style={{ color: "darkgrey" }}>
                        Clear Selection
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
