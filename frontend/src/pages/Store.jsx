import React, { useState } from 'react'
import './css/store/store.css'

const storeItems = [
	{
		img: '/ak47.png',
		title: '$10,000 BONUS BUY SPLIT',
		type: 'CASINO',
		desc: 'Prize can be redeemed on stream after confirmation of purchase',
		left: 1,
		redeemed: 0,
		points: 90000,
	},
	{
		img: '/ak47.png',
		title: 'AK-47 | GOLD ARABESQUE',
		type: 'CASINO',
		desc: 'Prize will be traded to you after confirmation of purchase',
		left: 1,
		redeemed: 0,
		points: 75000,
	},
	{
		img: '/laptop.png',
		title: `16" GAMING LAPTOP`,
		type: 'CASINO',
		desc: 'Prize will be shipped to you after confirmation of purchase',
		left: 2,
		redeemed: 0,
		points: 70000,
	},
	{
		img: '/voucher.png',
		title: '$1000 BONUS BUY',
		type: 'CASINO',
		desc: 'Prize can be redeemed on stream after confirmation of purchase',
		left: 3,
		redeemed: 0,
		points: 60000,
	},
	{
		img: '/voucher.png',
		title: '$1000 BONUS BUY',
		type: 'CASINO',
		desc: 'Prize can be redeemed on stream after confirmation of purchase',
		left: 3,
		redeemed: 0,
		points: 60000,
	},
	{
		img: '/voucher.png',
		title: '$1000 BONUS BUY',
		type: 'CASINO',
		desc: 'Prize can be redeemed on stream after confirmation of purchase',
		left: 3,
		redeemed: 0,
		points: 60000,
	},
	{
		img: '/voucher.png',
		title: '$1000 BONUS BUY',
		type: 'CASINO',
		desc: 'Prize can be redeemed on stream after confirmation of purchase',
		left: 3,
		redeemed: 0,
		points: 60000,
	},
	{
		img: '/voucher.png',
		title: '$1000 BONUS BUY',
		type: 'CASINO',
		desc: 'Prize can be redeemed on stream after confirmation of purchase',
		left: 3,
		redeemed: 0,
		points: 60000,
	},
	{
		img: '/voucher.png',
		title: '$1000 BONUS BUY',
		type: 'CASINO',
		desc: 'Prize can be redeemed on stream after confirmation of purchase',
		left: 3,
		redeemed: 0,
		points: 60000,
	},
	{
		img: '/voucher.png',
		title: '$1000 BONUS BUY',
		type: 'CASINO',
		desc: 'Prize can be redeemed on stream after confirmation of purchase',
		left: 3,
		redeemed: 0,
		points: 60000,
	},
	{
		img: '/voucher.png',
		title: '$1000 BONUS BUY',
		type: 'CASINO',
		desc: 'Prize can be redeemed on stream after confirmation of purchase',
		left: 3,
		redeemed: 0,
		points: 60000,
	},
	{
		img: '/voucher.png',
		title: '$1000 BONUS BUY',
		type: 'CASINO',
		desc: 'Prize can be redeemed on stream after confirmation of purchase',
		left: 3,
		redeemed: 0,
		points: 60000,
	},
	{
		img: '/voucher.png',
		title: '$1000 BONUS BUY',
		type: 'CASINO',
		desc: 'Prize can be redeemed on stream after confirmation of purchase',
		left: 3,
		redeemed: 0,
		points: 60000,
	},
	{
		img: '/voucher.png',
		title: '$1000 BONUS BUY',
		type: 'CASINO',
		desc: 'Prize can be redeemed on stream after confirmation of purchase',
		left: 3,
		redeemed: 0,
		points: 60000,
	},
	// Legg til flere objekter her hvis ønskelig
]

const Store = () => {
	const [search, setSearch] = useState('')

	const filteredItems = storeItems.filter((item) => {
		const searchText = search.toLowerCase()
		return (
			item.title.toLowerCase().includes(searchText) ||
			item.type.toLowerCase().includes(searchText) ||
			item.desc.toLowerCase().includes(searchText) ||
			item.left.toString().includes(searchText) ||
			item.redeemed.toString().includes(searchText) ||
			item.points.toString().includes(searchText)
		)
	})

	return (
		<section className="store-section">
			<div className="store-container">
				<h2 className="store-title">POINTS STORE</h2>
				<div className="store-subtitle">REEDEM ITEMS WITH POINTS</div>
				<div className="store-searchbar-wrapper">
					<input
						type="text"
						className="store-searchbar"
						placeholder="Search store items..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div className="store-grid">
					{filteredItems.length > 0 ? (
						filteredItems.map((item, i) => (
							<div className="store-card" key={item.title + i}>
								<img src={item.img} alt={item.title} className="store-img" />
								<div className="store-card-title">{item.title}</div>
								<div className="store-type">{item.type}</div>
								<div className="store-desc">{item.desc}</div>
								<div className="store-left">
									<span className="store-left-count">{item.left} Left</span>
									<span className="store-redeemed">
										– {item.redeemed} Redeemed
									</span>
								</div>
								<button className="store-claim-btn">
									Claim for{' '}
									<span className="store-points">
										{item.points.toLocaleString()} POINTS
									</span>
								</button>
								<div className="store-note">
									All redeems are reviewed manually, prizes will only be awarded to
									active community members. Physical prizes can not be exchanged for
									cash.
								</div>
							</div>
						))
					) : (
						<div
							style={{
								color: '#bdbdbd',
								gridColumn: '1/-1',
								textAlign: 'center',
								marginTop: 32,
							}}
						>
							No items match your search.
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default Store