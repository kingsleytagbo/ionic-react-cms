
import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';
/*
https://blog.logrocket.com/how-to-create-a-custom-toast-component-with-react/
*/

type props = {
    toastList: Array<any>;
    position?: string;
  };
const Toast: React.FC<props> = ({ ...props }) => {
    const { toastList, position } = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList(toastList);
    }, [toastList, list]);

    return (
        <>
            <div className={`notification-container ${position}`}>
                {
                    list.map((toast, i) =>     
                        <div 
                            key={i}
                            className={`notification toast ${position}`}
                        >
                            <button>
                                X
                            </button>
                            <div className="notification-image">
                                <img src={toast.icon} alt="" />
                            </div>
                            <div>
                                <p className="notification-title">{toast.title}</p>
                                <p className="notification-message">
                                    {toast.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

Toast.defaultProps = {
    position: 'bottom-right'
};

Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    position: PropTypes.string
};

export default Toast;