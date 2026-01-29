import "./hospital-requests.css";


const inventory = [
{ group: "A+", available: 45, reserved: 8, expiring: 3, status: "good" },
{ group: "A-", available: 12, reserved: 2, expiring: 1, status: "low" },
{ group: "B+", available: 38, reserved: 5, expiring: 2, status: "good" },
{ group: "B-", available: 8, reserved: 1, expiring: 0, status: "low" },
{ group: "AB+", available: 15, reserved: 3, expiring: 1, status: "medium" },
{ group: "AB-", available: 5, reserved: 0, expiring: 0, status: "low" },
{ group: "O+", available: 52, reserved: 12, expiring: 4, status: "good" },
{ group: "O-", available: 18, reserved: 4, expiring: 2, status: "medium" }
];


export default function HospitalSearch() {
return (
<div className="portal">
<h1>Hospital Portal</h1>
<p className="subtitle">Search blood inventory and manage requests</p>


<div className="tabs">
<span className="tab active">Search Inventory</span>
<Link to="/hospital/requests" className="tab">My Requests</Link>
<Link to="/hospital/new" className="tab">+ New Request</Link>
</div>


<div className="filters">
<h3>Search Filters</h3>
<div className="filter-grid">
<select>
<option>All Blood Groups</option>
<option>A+</option>
<option>A-</option>
<option>B+</option>
<option>B-</option>
<option>AB+</option>
<option>AB-</option>
<option>O+</option>
<option>O-</option>
</select>


<select>
<option>All Locations</option>
<option>City Hospital</option>
<option>Central Blood Bank</option>
</select>


<input type="number" placeholder="Minimum Units" />
</div>
</div>


<div className="grid">
{inventory.map((item, i) => (
<div key={i} className={`card ${item.status}`}>
<h2>{item.group}</h2>
<p><strong>Available:</strong> {item.available} units</p>
<p><strong>Reserved:</strong> {item.reserved} units</p>
<p className="expire">Expiring soon: {item.expiring} units</p>
<button>Request Blood</button>
</div>
))}
</div>
</div>
);
}