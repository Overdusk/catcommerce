import './Footer.css';
import { Link } from 'react-router-dom';
function Footer()
{
	return (
		<>
			<footer className="footer-container">
				<div className="f-contact-column">
					<h3>
						CONTACT INFO
					</h3>
					<span className="f-contact-subtitle">
						ADDRESS:
					</span>
					<span>
						123 Street Name, City, England
					</span>
					<span className="f-contact-subtitle">
						PHONE:
					</span>
					<span>
						(123) 456-7890
					</span>
					<span className="f-contact-subtitle">
						EMAIL:
					</span>
					<span>
						mail@example.com
					</span>
					<span className="f-contact-subtitle">
						WORKING DAYS/HOURS:
					</span>
					<span>
						Mon - Sun / 9:00 AM - 8:00 PM
					</span>
					<div className="f-contact-iconsc">
						<div className="f-contact-icontainer">
							<i className="bi bi-facebook ficon"></i>
						</div>
						<div className="f-contact-icontainer">
							<i className="bi bi-twitter ficon"></i>
						</div>
						<div className="f-contact-icontainer">
							<i className="bi bi-linkedin ficon"></i>
						</div>
					</div>
				</div>
				<div className="f-customer-column">
					<h3>CUSTOMER SERVICE</h3>
					<ul className="f-customer-links">
						<li><Link to="#">Help & FAQs</Link></li>
						<li><Link to="#">Order Tracking</Link></li>
						<li><Link to="#">Shipping & Delivery</Link></li>
						<li><Link to="#">Orders History</Link></li>
						<li><Link to="#">Advanced Search</Link></li>
						<li><Link to="#">My Account</Link></li>
						<li><Link to="#">Careers</Link></li>
						<li><Link to="#">About Us</Link></li>
						<li><Link to="#">Corporate Sales</Link></li>
						<li><Link to="#">Privacy</Link></li>
					</ul>
				</div>
				<div className="f-populart-column">
					<h3>POPULAR TAGS</h3>
					<div className="f-tag-container">
						<div className="tag-box">
							<span>Bag</span>
						</div>
						<div className="tag-box">
							<span>Black</span>
						</div>
						<div className="tag-box">
							<span>Blue</span>
						</div>
						<div className="tag-box">
							<span>Clothes</span>
						</div>
						<div className="tag-box">
							<span>Fashion</span>
						</div>
						<div className="tag-box">
							<span>Hub</span>
						</div>
						<div className="tag-box">
							<span>Jean</span>
						</div>
						<div className="tag-box">
							<span>Shirt</span>
						</div>
						<div className="tag-box">
							<span>Skirt</span>
						</div>
						<div className="tag-box">
							<span>Sports</span>
						</div>
						<div className="tag-box">
							<span>Sweater</span>
						</div>
						<div className="tag-box">
							<span>Winter</span>
						</div>
					</div>
				</div>
				<div className="f-subscribe-column">
					<h3>SUBSCRIBE NEWSLETTER</h3>
					<span className="f-subscribe-text">
						Get all the latest information on events, sales and offers. Sign up for newsletter:
					</span>
					<div className="f-subscribe">
						<div className="f-email-container">
							<input 
								type="email"
								placeholder="Email Adress" />
						</div>
						<button className="f-subscribe-btn">
							SUBSCRIBE
						</button>
					</div>
				</div>

			</footer>
		</>
	);
}
export default Footer;