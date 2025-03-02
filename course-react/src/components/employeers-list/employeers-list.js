import EmployeersListItem from "../employeers-list-item/employeers-list-item"

import "./employeers-list.css";

const EmployeersList = ({ data, onDelete, onToggleProp }) => {

	const elements = data.map(item => {
		const { id, ...itemProps } = item;
		return (
			<EmployeersListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
		)
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}
export default EmployeersList;