import React, { useState } from 'react'
import { X } from 'lucide-react'
import ma3akImage1 from '../assets/ma3ak_1.jpg'
import ma3akImage2 from '../assets/ma3ak_2.jpg'
import bargDashboard from '../assets/barg_dashboard.png'
import bargUserManagement from '../assets/barg_user_management.png'
import bargDriverDetails from '../assets/barg_driver_details.png'
import bargDeliveryChart from '../assets/barg_delivery_chart.png'

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  if (!isOpen || !project) return null

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const renderProjectMedia = () => {
    switch (project.id) {
      case 1: // Ma3ak
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="project-media-card relative" onClick={() => openImageModal(ma3akImage1)}>
              <img 
                src={ma3akImage1} 
                alt="Ma3ak App Demo 1"
                className="w-full h-auto rounded-lg cursor-pointer"
              />
              <div className="click-hint">Click to enlarge</div>
            </div>
            <div className="project-media-card relative" onClick={() => openImageModal(ma3akImage2)}>
              <img 
                src={ma3akImage2} 
                alt="Ma3ak App Demo 2"
                className="w-full h-auto rounded-lg cursor-pointer"
              />
              <div className="click-hint">Click to enlarge</div>
            </div>
          </div>
        )
      case 3: // Project Barg
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="project-media-card relative" onClick={() => openImageModal(bargDashboard)}>
              <img 
                src={bargDashboard} 
                alt="Project Barg - Dashboard Overview"
                className="w-full h-auto rounded-lg cursor-pointer"
              />
              <div className="click-hint">Click to enlarge</div>
            </div>
            <div className="project-media-card relative" onClick={() => openImageModal(bargUserManagement)}>
              <img 
                src={bargUserManagement} 
                alt="Project Barg - User Management"
                className="w-full h-auto rounded-lg cursor-pointer"
              />
              <div className="click-hint">Click to enlarge</div>
            </div>
            <div className="project-media-card relative" onClick={() => openImageModal(bargDriverDetails)}>
              <img 
                src={bargDriverDetails} 
                alt="Project Barg - Driver Details"
                className="w-full h-auto rounded-lg cursor-pointer"
              />
              <div className="click-hint">Click to enlarge</div>
            </div>
            <div className="project-media-card relative" onClick={() => openImageModal(bargDeliveryChart)}>
              <img 
                src={bargDeliveryChart} 
                alt="Project Barg - Daily Deliveries Chart"
                className="w-full h-auto rounded-lg cursor-pointer"
              />
              <div className="click-hint">Click to enlarge</div>
            </div>
          </div>
        )
      case 2: // Vizora
        return (
          <div className="project-media-card text-center py-16">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Coming Soon</h3>
            <p className="text-gray-600">Project details will be available soon</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="modal-content max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-purple-600 font-medium">{project.tech}</p>
          </div>

          {renderProjectMedia()}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <button className="image-modal-close" onClick={closeImageModal}>
            <X />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default ProjectModal

