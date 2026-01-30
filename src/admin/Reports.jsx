import "./Reports";
import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  TrendingUp, 
  Users, 
  Droplet, 
  Calendar,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import './Reports.css';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const reportStats = [
    {
      icon: <Users size={24} />,
      label: 'Total Donors',
      value: '1,234',
      change: '+12%',
      trend: 'up',
      color: 'blue'
    },
    {
      icon: <Droplet size={24} />,
      label: 'Blood Units Collected',
      value: '856',
      change: '+8%',
      trend: 'up',
      color: 'red'
    },
    {
      icon: <Activity size={24} />,
      label: 'Active Camps',
      value: '23',
      change: '+5%',
      trend: 'up',
      color: 'green'
    },
    {
      icon: <TrendingUp size={24} />,
      label: 'Distribution Rate',
      value: '94%',
      change: '+3%',
      trend: 'up',
      color: 'purple'
    }
  ];

  const availableReports = [
    {
      id: 1,
      title: 'Donor Activity Report',
      description: 'Complete list of donors and their donation history',
      icon: <Users size={20} />,
      category: 'Donors',
      lastGenerated: '2 hours ago'
    },
    {
      id: 2,
      title: 'Blood Inventory Report',
      description: 'Current stock levels by blood type and expiry dates',
      icon: <Droplet size={20} />,
      category: 'Inventory',
      lastGenerated: '1 day ago'
    },
    {
      id: 3,
      title: 'Camp Performance Report',
      description: 'Statistics from blood donation camps and events',
      icon: <Calendar size={20} />,
      category: 'Camps',
      lastGenerated: '3 hours ago'
    },
    {
      id: 4,
      title: 'Monthly Summary Report',
      description: 'Comprehensive monthly overview of all activities',
      icon: <BarChart3 size={20} />,
      category: 'Summary',
      lastGenerated: '5 hours ago'
    },
    {
      id: 5,
      title: 'Blood Type Distribution',
      description: 'Analysis of blood types in current inventory',
      icon: <PieChart size={20} />,
      category: 'Analytics',
      lastGenerated: '6 hours ago'
    },
    {
      id: 6,
      title: 'Hospital Requests Report',
      description: 'Summary of blood requests from hospitals',
      icon: <Activity size={20} />,
      category: 'Requests',
      lastGenerated: '4 hours ago'
    }
  ];

  const handleDownload = (reportTitle) => {
    console.log(`Downloading ${reportTitle}...`);
   
  };

  return (
    <div className="reports-container">
   
      <div className="reports-header">
        <div className="header-left">
          <h1>Reports & Analytics</h1>
          <p>Generate and download comprehensive reports</p>
        </div>
        <div className="header-right">
          <select 
            className="period-selector"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="weekly">This Week</option>
            <option value="monthly">This Month</option>
            <option value="quarterly">This Quarter</option>
            <option value="yearly">This Year</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {reportStats.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              <div className={`stat-change ${stat.trend}`}>
                <TrendingUp size={14} />
                <span>{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

  
      <div className="reports-section">
        <h2>Available Reports</h2>
        <div className="reports-grid">
          {availableReports.map((report) => (
            <div key={report.id} className="report-card">
              <div className="report-header">
                <div className="report-icon">{report.icon}</div>
                <span className="report-category">{report.category}</span>
              </div>
              <div className="report-content">
                <h3>{report.title}</h3>
                <p>{report.description}</p>
              </div>
              <div className="report-footer">
                <span className="last-generated">
                  Last generated: {report.lastGenerated}
                </span>
                <button 
                  className="download-btn"
                  onClick={() => handleDownload(report.title)}
                >
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-btn primary">
            <FileText size={18} />
            <span>Generate Custom Report</span>
          </button>
          <button className="action-btn secondary">
            <Calendar size={18} />
            <span>Schedule Report</span>
          </button>
          <button className="action-btn secondary">
            <Download size={18} />
            <span>Download All Reports</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;