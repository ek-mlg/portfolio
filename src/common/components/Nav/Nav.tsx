import React, {useEffect, useState} from 'react';
import s from './Nav.module.scss';



const Nav = () => {

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState(0);
        useEffect(() => {
            function handleResize() {
                setWindowSize(window.innerWidth)
            }

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    const size = useWindowSize()

    console.log(size)

    return (
        <>
            {size > 1040
                ?
                <div className={s.Nav}>
                    <a href="src/common/components/Nav" className={s.Current}>Home</a>
                    <a href="src/common/components/Nav" className={s.Current}>Skills</a>
                    <a href="src/common/components/Nav" className={s.Current}>Works</a>
                    <a href="src/common/components/Nav" className={s.Current}>Contacts</a>
                </div>
                :
                <h4 style={{
                    color: "white",
                    }}>МЕНЮ</h4>
            }
        </>

    );
};

export default Nav;