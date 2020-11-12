
/**
 * Title:  Custom, reusable Toast message component
 * Author: Kingsley Tagbo / https://github.com/kingsleytagbo
 */
import React  from 'react';
import { IonToast } from '@ionic/react';

type props = {
    isOpen?: boolean;
    position?: any;
    onDidDismiss: any;
    message: any;
    duration?: number;
}
const Toast: React.FC<props> = ({ ...props }) => {
    const params = {
        isOpen: props.isOpen || false,
        position: props.position || 'bottom',
        onDidDismiss: props.onDidDismiss,
        message:  props.message,
        duration:  props.duration || 20000
    };
    return (
        <IonToast
        {...params}
        >
      </IonToast>
  );
};
export default Toast;