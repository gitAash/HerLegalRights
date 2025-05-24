import React, { useState } from 'react';
import {
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaBook,
  FaBuilding,
  FaHome,
  FaUsers,
  FaBriefcase,
  FaUserShield
} from 'react-icons/fa';

export default function RightExplorer() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const rightsData = [
    {
      id: 1,
      title: "Protection Against Domestic Violence",
      category: "domestic",
      description:
        "Legal protections including restraining orders, protection orders, and access to shelter services for victims of domestic violence.",
      icon: <FaHome />
    },
    {
      id: 2,
      title: "Equal Pay for Equal Work",
      category: "workplace",
      description:
        "Right to receive equal compensation for performing the same job as colleagues, regardless of gender.",
      icon: <FaBriefcase />
    },
    {
      id: 3,
      title: "Maternity Benefits",
      category: "workplace",
      description:
        "Rights to paid maternity leave, job security during pregnancy, and protection against dismissal based on pregnancy status.",
      icon: <FaBriefcase />
    },
    {
      id: 4,
      title: "Property Rights",
      category: "property",
      description:
        "Rights to own, inherit, and control property independently, regardless of marital status.",
      icon: <FaBuilding />
    },
    {
      id: 5,
      title: "Sexual Harassment Prevention",
      category: "workplace",
      description:
        "Legal protections against sexual harassment in workplaces and educational institutions, including complaint mechanisms.",
      icon: <FaUserShield />
    },
    {
      id: 6,
      title: "Divorce and Maintenance",
      category: "family",
      description:
        "Rights regarding divorce proceedings, alimony, and maintenance support from spouse.",
      icon: <FaUsers />
    },
    {
      id: 7,
      title: "Child Custody Rights",
      category: "family",
      description:
        "Legal rights regarding custody of children, visitation arrangements, and child support after divorce or separation.",
      icon: <FaUsers />
    },
    {
      id: 8,
      title: "Education Rights",
      category: "education",
      description:
        "Rights to equal access to education and protection against discrimination in educational settings.",
      icon: <FaBook />
    }
  ];

  const filteredRights = rightsData.filter((right) => {
    const matchesCategory =
      selectedCategory === 'all' || right.category === selectedCategory;
    const matchesSearch =
      right.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      right.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="rights-explorer-page">
      <section className="section">
        <div className="container">
          <div className="rights-explorer-header animated">
            <h1>Know Your Rights</h1>
            <p className="lead">
              Explore legal rights and protections available to women across different categories.
              Understanding your rights is the first step towards empowerment and justice.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="search-filter-container animated delay-1">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search for specific rights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="rights-filter">
              {['all', 'domestic', 'workplace', 'property', 'family', 'education'].map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'all' ? 'All Rights' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Rights Cards Grid */}
          <div className="rights-grid animated delay-2">
            {filteredRights.length > 0 ? (
              filteredRights.map((right) => (
                <div key={right.id} className="card rights-card">
                  <div className="card-header">
                    <h3>{right.title}</h3>
                    <div className="card-icon">{right.icon}</div>
                  </div>
                  <p>{right.description}</p>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No rights found matching your search</h3>
                <p>Try adjusting your search terms or category filters</p>
              </div>
            )}
          </div>

          
        </div>
      </section>
    </div>
  );
}
