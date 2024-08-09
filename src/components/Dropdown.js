import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDropdownValue, setOpen } from "../slices/dropdownSlices";

const Dropdown = ({ title }) => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [selectedOption, setSelectedOption] = useState(null);

    const options = ["Buyed Items", "Sold Items"];
    const dropdown =  useSelector((state) => state.dropdown);
    const dispatch = useDispatch();

    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        dispatch(setOpen(!dropdown.isOpen));
    };

    const handleOptionClick = (option) => {
        dispatch(setDropdownValue(option))
        dispatch(setOpen(false));
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                dispatch(setOpen(false));
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [dispatch, dropdown.isOpen])

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="dropdown-button">
                {dropdown.dropdownValue || title}
            </button>
            {dropdown.isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}

                    <li onClick={() => {
                        dispatch(setDropdownValue(null))
                        dispatch(setOpen(false));
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
