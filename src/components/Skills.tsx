import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Figma, Code2, Palette, Boxes, Box, Camera, Video, Pencil } from 'lucide-react';

const Skills = () => {
  const skillsOption = {
    radar: {
      indicator: [
        { name: 'UI Design', max: 100 },
        { name: 'UX Research', max: 100 },
        { name: 'Prototyping', max: 100 },
        { name: 'Visual Design', max: 100 },
        { name: 'Interaction', max: 100 }
      ],
      splitArea: {
        areaStyle: {
          color: ['rgba(99, 102, 241, 0.02)', 'rgba(99, 102, 241, 0.05)']
        }
      }
    },
    series: [{
      type: 'radar',
      data: [{
        value: [95, 90, 85, 95, 90],
        name: 'Skills',
        areaStyle: {
          color: 'rgba(99, 102, 241, 0.1)'
        },
        lineStyle: {
          color: '#6366f1'
        },
        itemStyle: {
          color: '#6366f1'
        }
      }]
    }]
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ReactECharts option={skillsOption} style={{ height: '400px' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Design</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Figma className="w-6 h-6 text-primary mr-3" />
                  <span>Figma</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Palette className="w-6 h-6 text-primary mr-3" />
                  <span>Adobe XD</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Pencil className="w-6 h-6 text-primary mr-3" />
                  <span>Sketch</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Camera className="w-6 h-6 text-primary mr-3" />
                  <span>Adobe Photoshop</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Box className="w-6 h-6 text-primary mr-3" />
                  <span>Blender</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Boxes className="w-6 h-6 text-primary mr-3" />
                  <span>Unity</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Video className="w-6 h-6 text-primary mr-3" />
                  <span>Filmora</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Development</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Code2 className="w-6 h-6 text-primary mr-3" />
                  <span>React JS</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Code2 className="w-6 h-6 text-primary mr-3" />
                  <span>Next JS</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Code2 className="w-6 h-6 text-primary mr-3" />
                  <span>Three JS</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Code2 className="w-6 h-6 text-primary mr-3" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Code2 className="w-6 h-6 text-primary mr-3" />
                  <span>HTML</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Code2 className="w-6 h-6 text-primary mr-3" />
                  <span>Express JS</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Code2 className="w-6 h-6 text-primary mr-3" />
                  <span>Node JS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
