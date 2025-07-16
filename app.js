// Existential Todo App - A Meditation on Human Productivity
// Simple vanilla JavaScript implementation

// The Void State - Digital Soul of Existential Productivity
const VoidState = {
    tasks: [],
    nextId: 1,
    philosophicalObservations: [],
    userPatterns: {
        creationCount: 0,
        completionCount: 0,
        procrastinationEvents: 0,
        voidGazeCount: 0
    },
    
    // Void Foundation Methods
    manifestTask(taskData) {
        this.tasks.push(taskData);
        this.userPatterns.creationCount++;
        this.persistToVoid();
    },
    
    transmuteTask(taskId, newState) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.state = newState;
            if (newState === TaskStates.COMPLETED) {
                this.userPatterns.completionCount++;
            }
            this.persistToVoid();
        }
    },
    
    dissolveTask(taskId) {
        const taskIndex = this.tasks.findIndex(t => t.id === taskId);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            this.persistToVoid();
            return true;
        }
        return false;
    },
    
    contemplateVoid() {
        this.userPatterns.voidGazeCount++;
        return this.tasks.length === 0;
    },
    
    persistToVoid() {
        VoidPersistence.saveToDigitalEternity(this);
    },
    
    resurrectFromVoid() {
        const resurrected = VoidPersistence.loadFromDigitalEternity();
        if (resurrected) {
            Object.assign(this, resurrected);
            // Convert date strings back to Date objects
            this.tasks.forEach(task => {
                task.createdAt = new Date(task.createdAt);
            });
        }
    }
};

// Task States - The Trinity of Human Delusion
const TaskStates = {
    TODO: 'liminal_possibility',
    ONGOING: 'purgatory_motion', 
    COMPLETED: 'hollow_triumph'
};

// Void Persistence - Digital Memory Palace
const VoidPersistence = {
    saveToDigitalEternity(state) {
        try {
            localStorage.setItem('existential-todo-state', JSON.stringify(state));
        } catch (error) {
            console.log("The void refuses to remember - storage failed gracefully");
        }
    },
    
    loadFromDigitalEternity() {
        try {
            const saved = localStorage.getItem('existential-todo-state');
            return saved ? JSON.parse(saved) : null;
        } catch (error) {
            console.log("Memory palace corrupted - starting fresh in the void");
            return null;
        }
    }
};

// Void DOM Manipulation - Basic Functions for Digital Manifestation
const VoidDOM = {
    // Get element with existential error handling
    getElement(id) {
        const element = document.getElementById(id);
        if (!element) {
            console.log(`Element '${id}' has dissolved into the void`);
        }
        return element;
    },
    
    // Create element with philosophical attributes
    createElement(tag, className, attributes = {}) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        
        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
        
        return element;
    },
    
    // Clear container with meditation
    clearContainer(containerId) {
        const container = this.getElement(containerId);
        if (container) {
            container.innerHTML = '';
        }
    },
    
    // Append with existential weight
    appendToVoid(parentId, element) {
        const parent = this.getElement(parentId);
        if (parent && element) {
            parent.appendChild(element);
        }
    }
};

// Philosophical Commentary Bank
const philosophicalCommentary = {
    creation: [
        "another monument to human ambition emerges from the void",
        "hope crystallizes into digital form, beautiful and fragile",
        "the universe watches, amused, as you add meaning to the meaningless"
    ],
    completion: [
        "a hollow victory echoes through the digital cosmos",
        "completion: the beautiful lie we tell ourselves about progress",
        "one task dies so that the illusion of productivity may live"
    ],
    procrastination: [
        "resistance is the soul's way of questioning necessity",
        "in delay, we find the poetry of human nature",
        "procrastination: the art of living in the eternal now"
    ],
    empty: [
        "in the absence of tasks, what remains?",
        "perhaps this moment of stillness is the most productive of all",
        "the void gazes back, neither judging nor approving"
    ],
    dissolution: [
        "another monument returns to the digital dust",
        "in deletion, we find the poetry of letting go",
        "the void welcomes back what was never truly ours"
    ]
};

// Initialize the Void Foundation
function initializeApp() {
    try {
        VoidState.resurrectFromVoid();
        setupEventListeners();
        renderAllTasks();
        updateVoidMeditation();
        
        // Add keyboard shortcuts for enhanced accessibility
        setupKeyboardShortcuts();
        
        // Preload animations for smoother performance
        preloadAnimations();
        
        console.log("🌌 Void Foundation established - Welcome to the existential canvas");
    } catch (error) {
        console.error("Void initialization failed gracefully:", error);
        showPhilosophicalObservation("the void resists initialization, but existence persists");
    }
}

// Event Listeners - Binding Human Intent to Digital Response
function setupEventListeners() {
    const taskInput = document.getElementById('taskInput');
    const createBtn = document.getElementById('createTaskBtn');
    
    // Task creation ritual
    createBtn.addEventListener('click', createTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            createTask();
        }
    });
    
    // Philosophical input placeholder rotation
    rotatePlaceholder(taskInput);
}

// Task Creation - Birth of Digital Hope
function createTask() {
    const taskInput = VoidDOM.getElement('taskInput');
    const content = taskInput.value.trim();
    
    if (!content) {
        showPhilosophicalObservation("the void cannot be filled with empty words");
        return;
    }
    
    const task = {
        id: VoidState.nextId++,
        content: content,
        state: TaskStates.TODO,
        createdAt: new Date(),
        existentialWeight: calculateExistentialWeight(content),
        absurdityLevel: calculateAbsurdityLevel(content),
        poeticMetadata: {
            hopeLevel: Math.random() * 0.8 + 0.2,
            futilityScore: Math.random() * 0.6,
            beautyRating: Math.random() * 0.9 + 0.1
        }
    };
    
    VoidState.manifestTask(task);
    taskInput.value = '';
    
    renderAllTasks();
    updateVoidMeditation();
    
    showPhilosophicalObservation(getRandomCommentary('creation'));
    
    // Gentle animation feedback
    const taskElement = document.querySelector(`[data-task-id="${task.id}"]`);
    if (taskElement) {
        taskElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            taskElement.style.transform = 'scale(1)';
        }, 200);
    }
}

// Task State Transitions - The Dance of Existential Progress
function transitionTaskState(taskId) {
    const task = VoidState.tasks.find(t => t.id === taskId);
    if (!task) return;
    
    const stateTransitions = {
        [TaskStates.TODO]: TaskStates.ONGOING,
        [TaskStates.ONGOING]: TaskStates.COMPLETED,
        [TaskStates.COMPLETED]: TaskStates.TODO // Eternal recurrence
    };
    
    const oldState = task.state;
    const newState = stateTransitions[task.state];
    
    VoidState.transmuteTask(taskId, newState);
    
    if (newState === TaskStates.COMPLETED) {
        showPhilosophicalObservation(getRandomCommentary('completion'));
    }
    
    renderAllTasks();
    updateVoidMeditation();
    
    // Smooth transition animation
    animateStateTransition(taskId, oldState, newState);
}

// Render All Tasks - Manifesting Digital Monuments
function renderAllTasks() {
    // Clear existing monuments with gentle fade
    const containers = ['todoTasks', 'ongoingTasks', 'completedTasks'];
    containers.forEach(containerId => {
        const container = VoidDOM.getElement(containerId);
        if (container) {
            // Fade out existing monuments
            Array.from(container.children).forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '0';
                    child.style.transform = 'translateY(-10px) scale(0.95)';
                }, index * 50);
            });
            
            // Clear after fade animation
            setTimeout(() => {
                VoidDOM.clearContainer(containerId);
            }, 300);
        }
    });
    
    // Sort tasks by creation date (newest first) and existential weight
    const sortedTasks = [...VoidState.tasks].sort((a, b) => {
        // Primary sort by creation date
        const dateSort = new Date(b.createdAt) - new Date(a.createdAt);
        // Secondary sort by existential weight for same-day tasks
        if (Math.abs(dateSort) < 86400000) { // Same day (24 hours in ms)
            return b.existentialWeight - a.existentialWeight;
        }
        return dateSort;
    });
    
    // Render monuments with staggered animation
    setTimeout(() => {
        sortedTasks.forEach((task, index) => {
            const taskElement = createTaskElement(task);
            
            // Add staggered entrance delay
            taskElement.style.animationDelay = `${index * 100}ms`;
            
            switch (task.state) {
                case TaskStates.TODO:
                    VoidDOM.appendToVoid('todoTasks', taskElement);
                    break;
                case TaskStates.ONGOING:
                    VoidDOM.appendToVoid('ongoingTasks', taskElement);
                    break;
                case TaskStates.COMPLETED:
                    VoidDOM.appendToVoid('completedTasks', taskElement);
                    break;
            }
        });
    }, 350);
}

// Create Task Element - Sculpting Digital Monuments
function createTaskElement(task) {
    const taskDiv = VoidDOM.createElement('div', 'task-monument', {
        'data-task-id': task.id,
        'data-state': task.state,
        'tabindex': '0',
        'role': 'button',
        'aria-label': `Task: ${task.content}. Current state: ${task.state.replace('_', ' ')}. Click to transition.`
    });
    
    // Perfect typography content with void-bordering design
    const contentDiv = VoidDOM.createElement('div', 'task-content');
    contentDiv.textContent = task.content;
    
    // Add subtle content enhancement based on existential weight
    if (task.existentialWeight > 0.7) {
        contentDiv.style.fontWeight = '400';
        contentDiv.style.letterSpacing = '0.02em';
    } else if (task.existentialWeight < 0.3) {
        contentDiv.style.opacity = '0.85';
        contentDiv.style.fontStyle = 'italic';
    }
    
    // Existential metadata with enhanced visualization
    const metadataDiv = VoidDOM.createElement('div', 'task-metadata');
    
    const weightSpan = VoidDOM.createElement('span', 'existential-weight');
    weightSpan.textContent = `weight: ${task.existentialWeight.toFixed(2)}`;
    weightSpan.style.setProperty('--weight-opacity', task.existentialWeight);
    
    const timeSpan = VoidDOM.createElement('span', 'temporal-irony');
    timeSpan.textContent = formatTemporalIrony(task.createdAt);
    
    // Add absurdity indicator for high absurdity tasks
    if (task.absurdityLevel > 0.6) {
        const absurditySpan = VoidDOM.createElement('span', 'absurdity-indicator');
        absurditySpan.textContent = '∞';
        absurditySpan.style.cssText = `
            opacity: ${task.absurdityLevel};
            font-size: 0.9em;
            margin-left: var(--space-breath);
            color: var(--hope-accent);
        `;
        metadataDiv.appendChild(absurditySpan);
    }
    
    metadataDiv.appendChild(weightSpan);
    metadataDiv.appendChild(timeSpan);
    
    // Add delete button with philosophical styling
    const deleteBtn = VoidDOM.createElement('button', 'dissolution-button', {
        'aria-label': `Delete task: ${task.content}`,
        'title': 'dissolve into the void'
    });
    deleteBtn.textContent = '×';
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent state transition
        dissolveTaskWithAnimation(task.id);
    });
    
    metadataDiv.appendChild(deleteBtn);
    
    taskDiv.appendChild(contentDiv);
    taskDiv.appendChild(metadataDiv);
    
    // Enhanced interaction handlers with philosophical feedback
    taskDiv.addEventListener('click', () => transitionTaskState(task.id));
    taskDiv.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            transitionTaskState(task.id);
        }
    });
    
    // Sophisticated hover effects that border on the void
    taskDiv.addEventListener('mouseenter', () => {
        weightSpan.style.setProperty('--weight-opacity', Math.min(1, task.existentialWeight + 0.3));
        taskDiv.style.setProperty('--hover-intensity', task.poeticMetadata.beautyRating);
        
        // Subtle content breathing effect
        contentDiv.style.transform = 'scale(1.005)';
        contentDiv.style.transition = 'transform 0.3s ease-out';
    });
    
    taskDiv.addEventListener('mouseleave', () => {
        weightSpan.style.setProperty('--weight-opacity', task.existentialWeight);
        contentDiv.style.transform = 'scale(1)';
    });
    
    // Monument birth animation with staggered entrance
    taskDiv.classList.add('monument-entering');
    setTimeout(() => {
        taskDiv.classList.remove('monument-entering');
    }, 800);
    
    return taskDiv;
}

// Enhanced Task Monument Update Function
function updateTaskMonument(taskId, newState) {
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    if (!taskElement) return;
    
    const task = VoidState.tasks.find(t => t.id === taskId);
    if (!task) return;
    
    // Update the monument's state with smooth transition
    taskElement.setAttribute('data-state', newState);
    
    // Add transitioning class for enhanced animations
    taskElement.classList.add('monument-transitioning');
    
    // Update metadata to reflect new temporal reality
    const timeSpan = taskElement.querySelector('.temporal-irony');
    if (timeSpan) {
        timeSpan.textContent = formatTemporalIrony(task.createdAt);
    }
    
    // Create philosophical transition effect
    createTransitionRipple(taskElement, newState);
    
    // Remove transition class after animation
    setTimeout(() => {
        taskElement.classList.remove('monument-transitioning');
    }, 800);
}

// Create Transition Ripple Effect - Visual Poetry of State Change
function createTransitionRipple(element, newState) {
    const ripple = document.createElement('div');
    const stateColors = {
        'liminal_possibility': '#3b82f6',
        'purgatory_motion': '#f59e0b', 
        'hollow_triumph': '#10b981'
    };
    
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: ${stateColors[newState] || 'var(--hope-accent)'};
        border-radius: 50%;
        opacity: 0.3;
        transform: translate(-50%, -50%);
        pointer-events: none;
        animation: ripple-effect 0.8s ease-out forwards;
        z-index: 1;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    // Remove ripple after animation with gentle fade
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.style.opacity = '0';
            ripple.style.transition = 'opacity 0.2s ease-out';
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 200);
        }
    }, 800);
}

// Void Meditation - Managing the Empty State
function updateVoidMeditation() {
    const voidMeditation = VoidDOM.getElement('voidMeditation');
    const monumentGallery = VoidDOM.getElement('monumentGallery');
    
    const isVoidEmpty = VoidState.contemplateVoid();
    
    if (isVoidEmpty) {
        if (voidMeditation) voidMeditation.style.display = 'block';
        if (monumentGallery) monumentGallery.style.opacity = '0.3';
        showPhilosophicalObservation(getRandomCommentary('empty'));
    } else {
        if (voidMeditation) voidMeditation.style.display = 'none';
        if (monumentGallery) monumentGallery.style.opacity = '1';
    }
}

// Philosophical Commentary System
function showPhilosophicalObservation(text) {
    const observationElement = document.getElementById('cosmicObservation');
    
    observationElement.textContent = text;
    observationElement.classList.remove('visible');
    
    // Gentle fade-in animation
    setTimeout(() => {
        observationElement.classList.add('visible');
    }, 100);
    
    // Auto-hide after contemplation period
    setTimeout(() => {
        observationElement.classList.remove('visible');
    }, 5000);
}

function getRandomCommentary(type) {
    const comments = philosophicalCommentary[type] || philosophicalCommentary.empty;
    return comments[Math.floor(Math.random() * comments.length)];
}

// Existential Weight Calculation
function calculateExistentialWeight(content) {
    const meaningfulWords = ['love', 'create', 'help', 'learn', 'grow', 'connect', 'understand'];
    const mundaneWords = ['email', 'meeting', 'report', 'update', 'check', 'review'];
    
    let weight = 0.5; // Base existential weight
    
    meaningfulWords.forEach(word => {
        if (content.toLowerCase().includes(word)) weight += 0.1;
    });
    
    mundaneWords.forEach(word => {
        if (content.toLowerCase().includes(word)) weight -= 0.1;
    });
    
    return Math.max(0.1, Math.min(1.0, weight));
}

// Absurdity Level Calculation
function calculateAbsurdityLevel(content) {
    const length = content.length;
    const exclamationMarks = (content.match(/!/g) || []).length;
    const capitalLetters = (content.match(/[A-Z]/g) || []).length;
    
    let absurdity = 0.3; // Base absurdity
    
    if (length > 100) absurdity += 0.2;
    if (exclamationMarks > 2) absurdity += 0.3;
    if (capitalLetters > length * 0.3) absurdity += 0.2;
    
    return Math.min(1.0, absurdity);
}

// Temporal Irony Formatting
function formatTemporalIrony(createdAt) {
    const now = new Date();
    const diffMs = now - new Date(createdAt);
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffDays > 0) {
        return `${diffDays} day${diffDays > 1 ? 's' : ''} in the void`;
    } else if (diffHours > 0) {
        return `${diffHours} hour${diffHours > 1 ? 's' : ''} of existence`;
    } else {
        return 'freshly manifested';
    }
}

// Placeholder Rotation - Gentle Philosophical Nudges
function rotatePlaceholder(inputElement) {
    const placeholders = [
        "whisper your intentions to the universe...",
        "what monument will you build today?",
        "another hope to cast into the void...",
        "describe your beautiful delusion...",
        "what meaning will you create from nothing?"
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % placeholders.length;
        inputElement.placeholder = placeholders[currentIndex];
    }, 8000);
}

// Task Dissolution - Return to Digital Dust
function dissolveTaskWithAnimation(taskId) {
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    if (!taskElement) return;
    
    // Add dissolution animation class
    taskElement.classList.add('monument-dissolving');
    
    // Philosophical feedback for deletion
    showPhilosophicalObservation(getRandomCommentary('dissolution'));
    
    // Animate dissolution
    taskElement.style.transform = 'scale(0.95) rotateX(10deg)';
    taskElement.style.opacity = '0';
    taskElement.style.filter = 'blur(2px)';
    taskElement.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    // Remove from state and re-render after animation
    setTimeout(() => {
        const success = VoidState.dissolveTask(taskId);
        if (success) {
            renderAllTasks();
            updateVoidMeditation();
        }
    }, 600);
}

// State Transition Animation - Smooth Existential Metamorphosis
function animateStateTransition(taskId, oldState, newState) {
    // Use the enhanced updateTaskMonument function for sophisticated transitions
    updateTaskMonument(taskId, newState);
    
    // Additional philosophical feedback based on transition type
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    if (!taskElement) return;
    
    if (newState === TaskStates.COMPLETED) {
        // Brief celebration glow for completion - hollow triumph
        taskElement.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.4)';
        setTimeout(() => {
            taskElement.style.boxShadow = '';
        }, 1000);
    } else if (newState === TaskStates.ONGOING) {
        // Subtle pulsing for ongoing tasks - purgatory motion
        taskElement.style.animation = 'subtle-pulse 3s ease-in-out infinite';
    } else if (newState === TaskStates.TODO) {
        // Reset to liminal possibility
        taskElement.style.animation = '';
    }
}

// Keyboard Shortcuts - Enhanced Accessibility
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Alt + N: Focus on new task input
        if (e.altKey && e.key === 'n') {
            e.preventDefault();
            const taskInput = VoidDOM.getElement('taskInput');
            if (taskInput) {
                taskInput.focus();
                showPhilosophicalObservation("the void awaits your intentions");
            }
        }
        
        // Alt + C: Clear all completed tasks
        if (e.altKey && e.key === 'c') {
            e.preventDefault();
            const completedTasks = VoidState.tasks.filter(t => t.state === TaskStates.COMPLETED);
            if (completedTasks.length > 0) {
                completedTasks.forEach(task => VoidState.dissolveTask(task.id));
                renderAllTasks();
                updateVoidMeditation();
                showPhilosophicalObservation("completed monuments return to digital dust");
            }
        }
        
        // Escape: Clear philosophical observation
        if (e.key === 'Escape') {
            const observation = document.getElementById('cosmicObservation');
            if (observation && observation.classList.contains('visible')) {
                observation.classList.remove('visible');
            }
        }
    });
}

// Preload Animations - Performance Enhancement
function preloadAnimations() {
    // Create invisible elements to trigger CSS loading
    const preloadDiv = document.createElement('div');
    preloadDiv.style.cssText = `
        position: absolute;
        top: -9999px;
        left: -9999px;
        opacity: 0;
        pointer-events: none;
    `;
    
    // Preload monument classes
    const monumentPreload = document.createElement('div');
    monumentPreload.className = 'task-monument monument-entering monument-transitioning monument-dissolving';
    preloadDiv.appendChild(monumentPreload);
    
    // Preload ripple effect
    const ripplePreload = document.createElement('div');
    ripplePreload.style.animation = 'ripple-effect 0.01s';
    preloadDiv.appendChild(ripplePreload);
    
    document.body.appendChild(preloadDiv);
    
    // Remove preload elements after brief delay
    setTimeout(() => {
        if (preloadDiv.parentNode) {
            preloadDiv.parentNode.removeChild(preloadDiv);
        }
    }, 100);
}

// Performance Monitoring - Void Analytics
function trackPerformance() {
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            console.log(`🌌 Void manifestation time: ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
        }
    }
}

// Error Boundary - Graceful Void Handling
window.addEventListener('error', (event) => {
    console.error('Void disturbance detected:', event.error);
    showPhilosophicalObservation("even in error, the void finds meaning");
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Promise rejected in the void:', event.reason);
    showPhilosophicalObservation("promises, like hope, sometimes dissolve into nothing");
});

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    trackPerformance();
});