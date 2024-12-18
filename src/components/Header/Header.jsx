import './Header.css';
function Header()
{
	return(
		<>
			<nav className="nav-container">
				<div className="offer-nav">
					<span className="ot">Get Up to <span className="otb">40% OFF</span> New-Season Styles Men Women * Limited time only.</span>
				</div>
				<div className="items-nav">
					<div className="default-messages">
						<span>FREE RETURNS. STANDARD SHIPPING ORDERS $99+</span>
						<span>WELCOME TO CATCOMMERCE</span>
					</div>
					<ul>
						<li>Blog</li>
						<li>Sign In</li>
						<li>Contact Us</li>
						<li>Create an Account</li>
						<li>USD</li>
					</ul>
				</div>
				<div className="btns-nav">
					<img src ="logo/logo_ecomblue_lg.png" className="logo-blue"/>
					<div className="search">
						<input
							type="text"
							className="isearch"
							placeholder="Search..."
						 />
						<div className="csearch">
							<span>
								All Categorie
							</span>
							<i className="bi bi-chevron-down"></i>
						</div>
						<i className="bi bi-search"></i>
					</div>
					<div className="contact-section">
						<i className="bi bi-telephone"></i>
						<div className="text-sec">
							<span>CALL US NOW</span>
							<span>+123 5678 890</span>
						</div>
					</div>
					<div className="navicon-c">
						<i className="bi bi-person"></i>
						<i className="bi bi-heart"></i>
						<i className="bi bi-bag"></i>
						<i className="bi bi-chevron-down"></i>
						<div className="cart-counter">1</div>
					</div>
				</div>
			</nav>
		</>
	)
}
export default Header;