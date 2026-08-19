import { GoAlertFill } from "react-icons/go";

export default function Footer() {
    return <footer className="footer">
        <h3>Plenus</h3>
        <p>Desarrollo web</p>
        <span className="page-status">
            <GoAlertFill/>
            <p>Página en construcción, contacto por mensaje privado</p>
        </span>
    </footer>
} 