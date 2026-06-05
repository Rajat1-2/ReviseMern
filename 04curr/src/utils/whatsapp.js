export function getWhatsAppLink({ phone, message }) {
	const sanitized = String(phone ?? "").replace(/\D/g, "");
	const text = encodeURIComponent(message ?? "");
	return `https://wa.me/${sanitized}?text=${text}`;
}

export function openWhatsApp({ phone, message }) {
	const url = getWhatsAppLink({ phone, message });
	window.open(url, "_blank", "noopener,noreferrer");
}
