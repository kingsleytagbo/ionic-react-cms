import React,{useState}  from 'react';
import Toast from '../components/utilities/Toast';

export const showToast = (message:string, open:boolean) => {

    return (
        <Toast
            isOpen={true}
            position='top'
            onDidDismiss={() => ()=>{console.log('dismissed')}}
            message={message}
            duration={5000}
        />);
}