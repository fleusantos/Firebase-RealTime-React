import React from 'react'


class GroupCard extends React.Component {

	render () {
		const {name, count} = this.props
		<section className="card group simple-view">
			<p className="name">{name}</p>
			<p className="number">{count + ' persons'}</p>
		</section>
	}
}


export default GroupCard
