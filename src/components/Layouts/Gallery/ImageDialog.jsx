import {Dialog} from "@mui/material";

export default function ImageDialog({ open, onClose, selected }) {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <img
                src={selected?.img}
                alt={selected?.title}
                style={{ width: 'auto', height: '100%', objectFit: 'contain' }}
            />
        </Dialog>
    );
}