import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, X, Check, Shield, Clock, Zap } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Enterprise Suite',
    category: 'Software',
    price: 999,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Complete business management solution for enterprises.',
    features: [
      'Advanced Analytics Dashboard',
      'Multi-user Collaboration',
      'Real-time Reporting',
      'Custom Workflow Automation',
      'Enterprise-grade Security'
    ],
    benefits: [
      'Increase Productivity by 40%',
      'Reduce Operational Costs',
      'Streamline Business Processes',
      'Enhanced Data Security'
    ],
    technicalSpecs: {
      deployment: 'Cloud-based / On-premise',
      support: '24/7 Premium Support',
      integration: 'REST API Available',
      security: 'SOC 2 Type II Certified'
    }
  },
  {
    id: 2,
    name: 'Analytics Pro',
    category: 'Analytics',
    price: 499,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Advanced analytics and reporting platform.',
    features: [
      'Predictive Analytics',
      'Custom Report Builder',
      'Data Visualization',
      'Machine Learning Integration',
      'Export Capabilities'
    ],
    benefits: [
      'Data-Driven Decision Making',
      'Improved Market Intelligence',
      'Better Customer Insights',
      'Performance Optimization'
    ],
    technicalSpecs: {
      deployment: 'Cloud-based',
      support: 'Business Hours Support',
      integration: 'GraphQL API',
      security: 'GDPR Compliant'
    }
  },
  {
    id: 3,
    name: 'Analytics Pro',
    category: 'Analytics',
    price: 499,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Advanced analytics and reporting platform.',
    features: [
      'Predictive Analytics',
      'Custom Report Builder',
      'Data Visualization',
      'Machine Learning Integration',
      'Export Capabilities'
    ],
    benefits: [
      'Data-Driven Decision Making',
      'Improved Market Intelligence',
      'Better Customer Insights',
      'Performance Optimization'
    ],
    technicalSpecs: {
      deployment: 'Cloud-based',
      support: 'Business Hours Support',
      integration: 'GraphQL API',
      security: 'GDPR Compliant'
    }
  },
  {
    id: 4,
    name: 'Cloud Storage',
    category: 'Cloud',
    price: 299,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Secure and scalable cloud storage solution.',
    features: [
      'Unlimited Storage',
      'File Versioning',
      'End-to-end Encryption',
      'Team Collaboration',
      'Automatic Backup'
    ],
    benefits: [
      'Secure Data Storage',
      'Easy File Sharing',
      'Disaster Recovery',
      'Cost Effective'
    ],
    technicalSpecs: {
      deployment: 'Cloud-based',
      support: '24/7 Support',
      integration: 'RESTful API',
      security: 'AES-256 Encryption'
    }
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [selectedProduct, setSelectedProduct] = useState<null | typeof products[0]>(null);

  const categories = ['All', 'Software', 'Analytics', 'Cloud'];

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || product.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Products
          </motion.h1>
          <p className="text-xl text-gray-600">
            Discover our range of innovative solutions
          </p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span>{product.rating}/5</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Details Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div>
                        <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
                        <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-3xl font-bold text-blue-600">
                            ${selectedProduct.price}
                          </span>
                          <div className="flex items-center">
                            <Star className="h-6 w-6 text-yellow-400 mr-1" />
                            <span className="text-lg">{selectedProduct.rating}/5</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Features */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Zap className="h-5 w-5 text-blue-600 mr-2" />
                          Key Features
                        </h3>
                        <ul className="space-y-2">
                          {selectedProduct.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Shield className="h-5 w-5 text-blue-600 mr-2" />
                          Benefits
                        </h3>
                        <ul className="space-y-2">
                          {selectedProduct.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technical Specs */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Clock className="h-5 w-5 text-blue-600 mr-2" />
                          Technical Specs
                        </h3>
                        <div className="space-y-3">
                          {Object.entries(selectedProduct.technicalSpecs).map(([key, value]) => (
                            <div key={key}>
                              <span className="font-medium text-gray-700 capitalize">{key}:</span>
                              <p className="text-gray-600">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                      <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors">
                        Request a Demo
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Products;