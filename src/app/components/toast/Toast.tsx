// components/Toast.tsx
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToast = (message: string) => {
    toast.info(message);
};
