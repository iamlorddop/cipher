import React from 'react';
import './modal.css';

function Modal({ title, text, active, setActive }) {
	return (
	<>
		<div className={active ? "modal-bg active" : "modal-bg"} onClick={() => setActive(false)}></div>
		<div className={active ? "modal active" : "modal"}>
			<div className="cross" onClick={() => setActive(false)}>
				<span></span>
			</div>
			<h2 className="title">{ title }</h2>
			<p className="text">
			{ text }
			</p>
		</div>
	</>
	);
}

export default Modal;