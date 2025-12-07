import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/GIAIC-Hackathon-I-Physical-AI-Book/markdown-page/',
    component: ComponentCreator('/GIAIC-Hackathon-I-Physical-AI-Book/markdown-page/', 'b85'),
    exact: true
  },
  {
    path: '/GIAIC-Hackathon-I-Physical-AI-Book/',
    component: ComponentCreator('/GIAIC-Hackathon-I-Physical-AI-Book/', '4a8'),
    exact: true
  },
  {
    path: '/GIAIC-Hackathon-I-Physical-AI-Book/',
    component: ComponentCreator('/GIAIC-Hackathon-I-Physical-AI-Book/', 'abc'),
    routes: [
      {
        path: '/GIAIC-Hackathon-I-Physical-AI-Book/',
        component: ComponentCreator('/GIAIC-Hackathon-I-Physical-AI-Book/', 'a61'),
        routes: [
          {
            path: '/GIAIC-Hackathon-I-Physical-AI-Book/',
            component: ComponentCreator('/GIAIC-Hackathon-I-Physical-AI-Book/', '21c'),
            routes: [
              {
                path: '/GIAIC-Hackathon-I-Physical-AI-Book/1-introduction-embodied-intelligence/',
                component: ComponentCreator('/GIAIC-Hackathon-I-Physical-AI-Book/1-introduction-embodied-intelligence/', '458'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/GIAIC-Hackathon-I-Physical-AI-Book/2-ros2-basics/',
                component: ComponentCreator('/GIAIC-Hackathon-I-Physical-AI-Book/2-ros2-basics/', 'd44'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/GIAIC-Hackathon-I-Physical-AI-Book/3-gazebo-simulation/',
                component: ComponentCreator('/GIAIC-Hackathon-I-Physical-AI-Book/3-gazebo-simulation/', '9f9'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/GIAIC-Hackathon-I-Physical-AI-Book/4-nvidia-isaac-gym/',
                component: ComponentCreator('/GIAIC-Hackathon-I-Physical-AI-Book/4-nvidia-isaac-gym/', 'f83'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/GIAIC-Hackathon-I-Physical-AI-Book/5-real-world-humanoid-control/',
                component: ComponentCreator('/GIAIC-Hackathon-I-Physical-AI-Book/5-real-world-humanoid-control/', 'd0a'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/GIAIC-Hackathon-I-Physical-AI-Book/author-intro/',
                component: ComponentCreator('/GIAIC-Hackathon-I-Physical-AI-Book/author-intro/', 'e02'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/GIAIC-Hackathon-I-Physical-AI-Book/author-introduction/',
                component: ComponentCreator('/GIAIC-Hackathon-I-Physical-AI-Book/author-introduction/', 'fa7'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
