"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            className="relative bg-gradient-to-b from-gray-900 to-black rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700/50 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal content */}
            <div className="p-8">
              {/* Project header */}
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4">
                  {project.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {project.location}
                </div>
              </div>

              {/* Project details grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  {/* Image gallery would go here */}
                  <div className="bg-gradient-to-br from-blue-900/50 to-emerald-900/50 rounded-2xl h-64 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🏗️</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Project Overview</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-400">Duration</div>
                        <div className="text-xl font-bold">{project.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Budget</div>
                        <div className="text-xl font-bold">{project.budget}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Status</div>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${project.statusColor}`}></div>
                          <span>{project.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project description */}
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key achievements */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <li key={key} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                      <span className="capitalize">{key}: </span>
                      <span className="font-semibold ml-1">{String(value)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;