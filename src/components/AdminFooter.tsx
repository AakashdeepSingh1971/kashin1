export default function AdminFooter() {
    return (
        <footer className="h-12 bg-black text-white/60 flex items-center justify-center text-xs">
            © {new Date().getFullYear()} Admin Panel
        </footer>
    );
}
