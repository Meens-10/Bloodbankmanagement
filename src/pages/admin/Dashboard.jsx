import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
// Lucide icons need to be imported if used, but original code used unicode characters for some, 
// and the user request mentioned "lucide-react icons". 
// The original used: 👥, 🩸, 🧪, 📦, ✅, 📅, ❌, ⏳
// I will replace them with Lucide icons for better look.
import { Users, Droplet, FlaskConical, Package, CheckCircle, Calendar, XCircle, Clock, Activity, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: "Total Donors", value: "1245", sub: "+12% from last month", icon: Users, color: "primary", bg: "bg-primary-subtle" },
    { title: "Total Donations", value: "3421", sub: "+15% from last month", icon: Droplet, color: "danger", bg: "bg-danger-subtle" },
    { title: "Pending Tests", value: "8", sub: "Requires testing", icon: FlaskConical, color: "warning", bg: "bg-warning-subtle" },
    { title: "Inventory Units", value: "193", sub: "Across all locations", icon: Package, color: "info", bg: "bg-info-subtle" },
    { title: "Active Donors", value: "892", sub: "+8% from last month", icon: CheckCircle, color: "success", bg: "bg-success-subtle" },
    { title: "Upcoming Camps", value: "5", sub: "This month", icon: Calendar, color: "secondary", bg: "bg-secondary-subtle" },
    { title: "Discarded Bags", value: "23", sub: "Safety protocols", icon: XCircle, color: "danger", bg: "bg-danger-subtle" },
    { title: "Pending Requests", value: "12", sub: "Requires attention", icon: Clock, color: "dark", bg: "bg-light" },
  ];

  const activities = [
    { title: "Blood bag BAG2024003 cleared all tests", desc: "Added to inventory - B+ Blood Group", time: "2 hours ago", icon: CheckCircle, color: "text-success" },
    { title: "Blood bag BAG2024004 discarded", desc: "Hepatitis B positive - Safety protocol followed", time: "3 hours ago", icon: XCircle, color: "text-danger" },
    { title: "Blood request fulfilled", desc: "City Hospital - 3 units A+", time: "4 hours ago", icon: Droplet, color: "text-primary" },
    { title: "Blood camp completed", desc: "University Drive - 187 donations collected", time: "1 day ago", icon: Calendar, color: "text-warning" },
  ];

  return (
    <Container fluid className="p-0">
      <Row className="mb-4 g-3">
        {stats.map((stat, index) => (
          <Col key={index} sm={6} md={4} xl={3}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="d-flex align-items-center">
                <div className={`rounded-circle p-3 me-3 ${stat.bg}`}>
                  <stat.icon size={24} className={`text-${stat.color}`} />
                </div>
                <div>
                  <h6 className="text-muted mb-1 small text-uppercase fw-bold">{stat.title}</h6>
                  <h3 className="mb-0 fw-bold">{stat.value}</h3>
                  <small className={`text-${stat.color === 'dark' ? 'muted' : stat.color}`}>{stat.sub}</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-white py-3">
              <div className="d-flex align-items-center gap-2">
                <Activity size={20} className="text-primary" />
                <h5 className="mb-0 fw-bold">Recent Activity</h5>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-column gap-3">
                {activities.map((item, index) => (
                  <div key={index} className="d-flex align-items-start border-bottom pb-3 last-no-border">
                    <div className="me-3 mt-1">
                      <item.icon size={20} className={item.color} />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1 fw-bold">{item.title}</h6>
                      <p className="mb-1 text-muted small">{item.desc}</p>
                      <small className="text-secondary">{item.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
