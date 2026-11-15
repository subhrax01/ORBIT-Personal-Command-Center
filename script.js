/**
 * ============================================================================
 * ORBIT // FUTURISTIC PERSONAL COMMAND CENTER
 * Complete Client-Side Operating System Architecture
 * 
 * Strict Tech: HTML5 + CSS3 + Vanilla JavaScript (No frameworks, No eval())
 * Designed & Developed by Subhranil Paul
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DEFAULT DATA SEEDS & SYSTEM CONSTANTS
  // --------------------------------------------------------------------------
  const APP_STORAGE_KEYS = {
    TASKS: 'orbit_tasks',
    NOTES: 'orbit_notes',
    EXPENSES: 'orbit_expenses',
    EVENTS: 'orbit_events',
    FOCUS: 'orbit_focus_stats',
    CALC_HISTORY: 'orbit_calc_history',
    SETTINGS: 'orbit_settings'
  };

  const DEFAULT_SETTINGS = {
    theme: 'dark',
    accent: 'cyan',
    userName: 'Subhranil',
    userTitle: 'COMMANDER',
    clockFormat: '12',
    soundEnabled: true,
    particlesEnabled: true
  };

  // Seed data for initial experience
  const SEED_DATA = {
    tasks: [
      {
        id: 't-101',
        title: 'Calibrate orbital telemetry sensors',
        desc: 'Perform diagnostic scan on long-range navigational array and verify frequency locks.',
        priority: 'high',
        category: 'Mission',
        dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        completed: false,
        createdAt: new Date().toISOString()
      },
      {
        id: 't-102',
        title: 'Review quarterly quantum compute budget',
        desc: 'Audit energy distribution matrices and server node subscriptions.',
        priority: 'medium',
        category: 'Finance',
        dueDate: new Date().toISOString().split('T')[0],
        completed: false,
        createdAt: new Date().toISOString()
      },
      {
        id: 't-103',
        title: 'Deploy firmware update v3.5 to core relays',
        desc: 'Push encrypted package to secondary satellites and verify checksums.',
        priority: 'high',
        category: 'Work',
        dueDate: new Date(Date.now() + 172800000).toISOString().split('T')[0],
        completed: false,
        createdAt: new Date().toISOString()
      },
      {
        id: 't-104',
        title: 'Synchronize neural backup repository',
        desc: 'Client-side encrypted snapshots committed to offline cold storage vault.',
        priority: 'low',
        category: 'Research',
        dueDate: new Date(Date.now() - 86400000).toISOString().split('T')[0],
        completed: true,
        createdAt: new Date(Date.now() - 172800000).toISOString()
      },
      {
        id: 't-105',
        title: 'Inspect physical environmental life support filters',
        desc: 'Verify airflow velocity and particulate containment systems.',
        priority: 'medium',
        category: 'Health',
        dueDate: new Date().toISOString().split('T')[0],
        completed: true,
        createdAt: new Date(Date.now() - 86400000).toISOString()
      }
    ],
    notes: [
      {
        id: 'n-201',
        title: 'Quantum Gravitational Lensing Hypothesis',
        content: 'Exploration of non-linear warp field dynamics. Key finding: maintaining harmonic balance at 432 Hz reduces spatial friction by 18.4%. Need to test simulation on next orbital pass.',
        category: 'Research',
        color: 'cyan',
        createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
        updatedAt: new Date(Date.now() - 3600000 * 2).toISOString()
      },
      {
        id: 'n-202',
        title: 'ORBIT Core Architecture Guidelines',
        content: 'System parameters: Zero external dependencies, client-side persistence, modular tokenized math engine, real-time telemetry audio haptics. Focus on clean separation and responsive glassmorphism.',
        category: 'Tactical',
        color: 'purple',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        updatedAt: new Date(Date.now() - 86400000).toISOString()
      },
      {
        id: 'n-203',
        title: 'Fleet Logistics & Resupply Protocol',
        content: 'Refueling scheduled at Station Alpha-9. Payload: 400kg deuterium canisters, 2x spare ion thrusters, encrypted optical transceivers.',
        category: 'Work',
        color: 'green',
        createdAt: new Date(Date.now() - 172800000).toISOString(),
        updatedAt: new Date(Date.now() - 172800000).toISOString()
      }
    ],
    expenses: [
      {
        id: 'e-301',
        desc: 'Orbital Research Grant Inflow',
        amount: 8500.00,
        type: 'income',
        category: 'Investments',
        date: new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0],
        createdAt: new Date().toISOString()
      },
      {
        id: 'e-302',
        desc: 'Consulting Honorarium - Deep Space Array',
        amount: 3200.00,
        type: 'income',
        category: 'Freelance',
        date: new Date(Date.now() - 86400000 * 1).toISOString().split('T')[0],
        createdAt: new Date().toISOString()
      },
      {
        id: 'e-303',
        desc: 'Quantum Compute Cloud Server Lease',
        amount: 640.00,
        type: 'expense',
        category: 'Tech & Hardware',
        date: new Date().toISOString().split('T')[0],
        createdAt: new Date().toISOString()
      },
      {
        id: 'e-304',
        desc: 'Habitation Utilities & Atmospheric Scrubbing',
        amount: 380.50,
        type: 'expense',
        category: 'Housing & Utilities',
        date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0],
        createdAt: new Date().toISOString()
      },
      {
        id: 'e-305',
        desc: 'Nutrient Pack Provisions & Hydroponics',
        amount: 215.20,
        type: 'expense',
        category: 'Food & Dining',
        date: new Date(Date.now() - 86400000 * 4).toISOString().split('T')[0],
        createdAt: new Date().toISOString()
      }
    ],
    events: [
      {
        id: 'v-401',
        title: 'Orbital Flight Command Briefing',
        date: new Date().toISOString().split('T')[0],
        time: '14:30',
        category: 'Mission',
        badgeColor: 'cyan',
        desc: 'Synchronized alignment with High Command on sector 7 patrol perimeter.',
        createdAt: new Date().toISOString()
      },
      {
        id: 'v-402',
        title: 'Deep Space Telescope Calibration',
        date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        time: '09:00',
        category: 'Meeting',
        badgeColor: 'purple',
        desc: 'Verification of optical telemetry sensors with research station.',
        createdAt: new Date().toISOString()
      },
      {
        id: 'v-403',
        title: 'System Security Protocol Audit',
        date: new Date(Date.now() + 172800000 * 2).toISOString().split('T')[0],
        time: '16:00',
        category: 'Deadline',
        badgeColor: 'amber',
        desc: 'Annual cryptographic review of neural network models.',
        createdAt: new Date().toISOString()
      }
    ],
    focus: {
      completedSessions: 4,
      totalMinutesToday: 100,
      lastDate: new Date().toISOString().split('T')[0]
    },
    calcHistory: [
      { expression: 'sin(45) * 128', result: '90.5097', timestamp: Date.now() - 3600000 },
      { expression: 'sqrt(65536) / 4', result: '64', timestamp: Date.now() - 7200000 }
    ]
  };

  // --------------------------------------------------------------------------
  // 2. CENTRAL STATE STORE
  // --------------------------------------------------------------------------
  class OrbitState {
    constructor() {
      this.init();
    }

    init() {
      this.settings = this.load(APP_STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS);
      this.tasks = this.load(APP_STORAGE_KEYS.TASKS, null);
      this.notes = this.load(APP_STORAGE_KEYS.NOTES, null);
      this.expenses = this.load(APP_STORAGE_KEYS.EXPENSES, null);
      this.events = this.load(APP_STORAGE_KEYS.EVENTS, null);
      this.focus = this.load(APP_STORAGE_KEYS.FOCUS, null);
      this.calcHistory = this.load(APP_STORAGE_KEYS.CALC_HISTORY, null);

      // First time installation: populate seeds
      if (!this.tasks) {
        this.tasks = SEED_DATA.tasks;
        this.save(APP_STORAGE_KEYS.TASKS, this.tasks);
      }
      if (!this.notes) {
        this.notes = SEED_DATA.notes;
        this.save(APP_STORAGE_KEYS.NOTES, this.notes);
      }
      if (!this.expenses) {
        this.expenses = SEED_DATA.expenses;
        this.save(APP_STORAGE_KEYS.EXPENSES, this.expenses);
      }
      if (!this.events) {
        this.events = SEED_DATA.events;
        this.save(APP_STORAGE_KEYS.EVENTS, this.events);
      }
      if (!this.focus) {
        this.focus = SEED_DATA.focus;
        this.save(APP_STORAGE_KEYS.FOCUS, this.focus);
      }
      if (!this.calcHistory) {
        this.calcHistory = SEED_DATA.calcHistory;
        this.save(APP_STORAGE_KEYS.CALC_HISTORY, this.calcHistory);
      }
    }

    load(key, fallback) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;
      } catch (err) {
        console.warn(`[ORBIT] Storage read warning for key: ${key}`, err);
        return fallback;
      }
    }

    save(key, val) {
      try {
        localStorage.setItem(key, JSON.stringify(val));
      } catch (err) {
        console.error(`[ORBIT] Storage write error for key: ${key}`, err);
      }
    }

    resetAllData() {
      localStorage.clear();
      this.init();
    }

    reloadSeeds() {
      this.tasks = JSON.parse(JSON.stringify(SEED_DATA.tasks));
      this.notes = JSON.parse(JSON.stringify(SEED_DATA.notes));
      this.expenses = JSON.parse(JSON.stringify(SEED_DATA.expenses));
      this.events = JSON.parse(JSON.stringify(SEED_DATA.events));
      this.focus = JSON.parse(JSON.stringify(SEED_DATA.focus));
      this.calcHistory = JSON.parse(JSON.stringify(SEED_DATA.calcHistory));

      this.save(APP_STORAGE_KEYS.TASKS, this.tasks);
      this.save(APP_STORAGE_KEYS.NOTES, this.notes);
      this.save(APP_STORAGE_KEYS.EXPENSES, this.expenses);
      this.save(APP_STORAGE_KEYS.EVENTS, this.events);
      this.save(APP_STORAGE_KEYS.FOCUS, this.focus);
      this.save(APP_STORAGE_KEYS.CALC_HISTORY, this.calcHistory);
    }
  }

  const State = new OrbitState();

  // --------------------------------------------------------------------------
  // 3. SYNTHESIZED AUDIO HAPTICS ENGINE (Web Audio API)
  // --------------------------------------------------------------------------
  class AudioEngine {
    constructor() {
      this.ctx = null;
      this.synthNode = null;
      this.synthGain = null;
      this.ambientPlaying = false;
    }

    initCtx() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playClick() {
      if (!State.settings.soundEnabled) return;
      try {
        this.initCtx();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {
        // Audio policy ignore
      }
    }

    playSuccess() {
      if (!State.settings.soundEnabled) return;
      try {
        this.initCtx();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(523.25, now); // C5
        osc1.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc1.frequency.setValueAtTime(783.99, now + 0.16); // G5

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(1046.50, now + 0.16); // C6

        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);

        osc1.start(now);
        osc2.start(now + 0.16);
        osc1.stop(now + 0.45);
        osc2.stop(now + 0.45);
      } catch (e) {}
    }

    playAlarm() {
      if (!State.settings.soundEnabled) return;
      try {
        this.initCtx();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        [0, 0.15, 0.3, 0.45].forEach((offset) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(950, now + offset);
          osc.frequency.exponentialRampToValueAtTime(450, now + offset + 0.1);
          gain.gain.setValueAtTime(0.08, now + offset);
          gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.1);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + offset);
          osc.stop(now + offset + 0.1);
        });
      } catch (e) {}
    }

    startAmbient(preset = 'space', vol = 0.3) {
      try {
        this.initCtx();
        if (!this.ctx) return;
        this.stopAmbient();

        this.synthGain = this.ctx.createGain();
        this.synthGain.gain.setValueAtTime(vol * 0.15, this.ctx.currentTime);

        if (preset === 'space') {
          // Low drone harmonic
          const osc1 = this.ctx.createOscillator();
          const osc2 = this.ctx.createOscillator();
          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(110, this.ctx.currentTime); // A2

          const filter = this.ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(320, this.ctx.currentTime);

          osc1.connect(filter);
          osc2.connect(filter);
          filter.connect(this.synthGain);
          this.synthGain.connect(this.ctx.destination);

          osc1.start();
          osc2.start();
          this.synthNode = [osc1, osc2];
        } else {
          // Noise buffer generator (white/rain)
          const bufferSize = 2 * this.ctx.sampleRate;
          const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
          }

          const whiteNoise = this.ctx.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          whiteNoise.loop = true;

          const filter = this.ctx.createBiquadFilter();
          filter.type = preset === 'rain' ? 'bandpass' : 'lowpass';
          filter.frequency.setValueAtTime(preset === 'rain' ? 800 : 400, this.ctx.currentTime);

          whiteNoise.connect(filter);
          filter.connect(this.synthGain);
          this.synthGain.connect(this.ctx.destination);

          whiteNoise.start();
          this.synthNode = [whiteNoise];
        }

        this.ambientPlaying = true;
      } catch (e) {
        console.warn('Ambient synth error:', e);
      }
    }

    setAmbientVolume(vol) {
      if (this.synthGain && this.ctx) {
        this.synthGain.gain.setValueAtTime(vol * 0.15, this.ctx.currentTime);
      }
    }

    stopAmbient() {
      if (this.synthNode) {
        this.synthNode.forEach(node => {
          try { node.stop(); } catch (e) {}
        });
        this.synthNode = null;
      }
      this.ambientPlaying = false;
    }
  }

  const Sound = new AudioEngine();

  // --------------------------------------------------------------------------
  // 4. TOAST NOTIFICATION SUBSYSTEM
  // --------------------------------------------------------------------------
  function showToast(message, type = 'info', duration = 3200) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg class="toast-icon text-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
    } else if (type === 'warning') {
      iconSvg = '<svg class="toast-icon text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
    } else if (type === 'danger') {
      iconSvg = '<svg class="toast-icon text-magenta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
    } else {
      iconSvg = '<svg class="toast-icon text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
    }

    toast.innerHTML = `
      ${iconSvg}
      <span class="toast-msg">${escapeHtml(message)}</span>
      <button class="toast-close">&times;</button>
    `;

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      toast.remove();
    });

    container.appendChild(toast);

    if (type === 'success') Sound.playSuccess();
    else Sound.playClick();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --------------------------------------------------------------------------
  // 5. AMBIENT CANVAS PARTICLE NETWORK
  // --------------------------------------------------------------------------
  class ParticleNetwork {
    constructor() {
      this.canvas = document.getElementById('ambient-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.maxParticles = 55;
      this.mouse = { x: null, y: null, radius: 120 };
      this.running = true;

      this.resize();
      this.initParticles();
      this.bindEvents();
      this.animate();
    }

    resize() {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
    }

    bindEvents() {
      window.addEventListener('resize', () => this.resize());
      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });
      window.addEventListener('mouseleave', () => {
        this.mouse.x = null;
        this.mouse.y = null;
      });
    }

    initParticles() {
      this.particles = [];
      for (let i = 0; i < this.maxParticles; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.8 + 0.8,
          alpha: Math.random() * 0.45 + 0.15
        });
      }
    }

    setRunning(state) {
      this.running = state;
      if (!state && this.ctx) {
        this.ctx.clearRect(0, 0, this.width, this.height);
      }
    }

    animate() {
      if (this.running && State.settings.particlesEnabled) {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Particle logic
        for (let i = 0; i < this.particles.length; i++) {
          const p = this.particles[i];

          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > this.width) p.vx *= -1;
          if (p.y < 0 || p.y > this.height) p.vy *= -1;

          // Mouse push
          if (this.mouse.x !== null) {
            const dx = p.x - this.mouse.x;
            const dy = p.y - this.mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < this.mouse.radius) {
              const angle = Math.atan2(dy, dx);
              const force = (this.mouse.radius - dist) / this.mouse.radius;
              p.x += Math.cos(angle) * force * 1.5;
              p.y += Math.sin(angle) * force * 1.5;
            }
          }

          // Draw node
          this.ctx.beginPath();
          this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          this.ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`;
          this.ctx.fill();

          // Connect adjacent nodes
          for (let j = i + 1; j < this.particles.length; j++) {
            const p2 = this.particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 110) {
              const alpha = (1 - dist / 110) * 0.14;
              this.ctx.beginPath();
              this.ctx.moveTo(p.x, p.y);
              this.ctx.lineTo(p2.x, p2.y);
              this.ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
              this.ctx.lineWidth = 0.8;
              this.ctx.stroke();
            }
          }
        }
      }
      requestAnimationFrame(() => this.animate());
    }
  }

  let particleSys = null;

  // --------------------------------------------------------------------------
  // 6. SYSTEM BOOT LOADER
  // --------------------------------------------------------------------------
  function runBootSequence() {
    const overlay = document.getElementById('boot-overlay');
    const fill = document.getElementById('boot-progress-fill');
    const status = document.getElementById('boot-status');
    if (!overlay) return;

    const steps = [
      { pct: 25, msg: 'INITIALIZING QUANTUM ENCRYPTION PROTOCOLS...' },
      { pct: 60, msg: 'LOADING NEURAL DATABASE MATRICES...' },
      { pct: 85, msg: 'SYNCHRONIZING TELEMETRY STREAMS...' },
      { pct: 100, msg: 'SYSTEM READY // ORBIT ONLINE' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        if (fill) fill.style.width = `${step.pct}%`;
        if (status) status.textContent = step.msg;
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          overlay.classList.add('fade-out');
          setTimeout(() => overlay.remove(), 600);
        }, 300);
      }
    }, 180);
  }

  // --------------------------------------------------------------------------
  // 7. TELEMETRY CLOCK & UPTIME ENGINE
  // --------------------------------------------------------------------------
  const bootTime = Date.now();

  function updateClock() {
    const now = new Date();
    const hoursElem = document.getElementById('clock-hours');
    const minutesElem = document.getElementById('clock-minutes');
    const secondsElem = document.getElementById('clock-seconds');
    const ampmElem = document.getElementById('clock-ampm');
    const dateElem = document.getElementById('top-date');
    const miniClock = document.getElementById('sidebar-clock-mini');
    const uptimeElem = document.getElementById('system-uptime-text');

    let h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    let ampm = '';

    if (State.settings.clockFormat === '12') {
      ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
    }
    const hStr = String(h).padStart(2, '0');

    if (hoursElem) hoursElem.textContent = hStr;
    if (minutesElem) minutesElem.textContent = m;
    if (secondsElem) secondsElem.textContent = s;
    if (ampmElem) {
      ampmElem.textContent = ampm;
      ampmElem.style.display = ampm ? 'inline' : 'none';
    }
    if (miniClock) miniClock.textContent = `${hStr}:${m}`;

    // Stardate format
    const year = now.getFullYear();
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const month = monthNames[now.getMonth()];
    const day = String(now.getDate()).padStart(2, '0');
    if (dateElem) {
      dateElem.textContent = `STARDATE ${year}.${month}.${day}`;
    }

    // Uptime
    if (uptimeElem) {
      const diffSec = Math.floor((Date.now() - bootTime) / 1000);
      const uh = String(Math.floor(diffSec / 3600)).padStart(2, '0');
      const um = String(Math.floor((diffSec % 3600) / 60)).padStart(2, '0');
      const us = String(diffSec % 60).padStart(2, '0');
      uptimeElem.textContent = `UPTIME: ${uh}:${um}:${us}`;
    }
  }

  // --------------------------------------------------------------------------
  // 8. NAVIGATION & SECTION ROUTING
  // --------------------------------------------------------------------------
  let currentSection = 'command-center';

  function navigateTo(sectionId) {
    if (!sectionId) return;
    const targetSection = document.getElementById(`section-${sectionId}`);
    if (!targetSection) return;

    Sound.playClick();
    currentSection = sectionId;

    // Update section visibility
    document.querySelectorAll('.app-section').forEach(sec => sec.classList.remove('active'));
    targetSection.classList.add('active');

    // Update sidebar navigation active state
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.section === sectionId);
    });

    // Close mobile drawer if open
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('mobile-open')) {
      sidebar.classList.remove('mobile-open');
    }

    // Refresh specific section rendering
    if (sectionId === 'command-center') renderDashboard();
    if (sectionId === 'task-manager') renderTasks();
    if (sectionId === 'notes') renderNotes();
    if (sectionId === 'expense-tracker') renderExpenses();
    if (sectionId === 'calendar') renderCalendar();
    if (sectionId === 'settings') updateStorageStats();
  }

  function setupNavigation() {
    // Sidebar items
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.section;
        navigateTo(target);
      });
    });

    // Collapse toggle
    const collapseBtn = document.getElementById('sidebar-collapse-btn');
    const sidebar = document.getElementById('sidebar');
    if (collapseBtn && sidebar) {
      collapseBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        Sound.playClick();
      });
    }

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if (mobileBtn && sidebar) {
      mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
        Sound.playClick();
      });
    }

    // Dashboard quick jumps
    const jumpTasks = document.getElementById('dash-view-tasks-link');
    if (jumpTasks) jumpTasks.addEventListener('click', () => navigateTo('task-manager'));

    const jumpNotes = document.getElementById('dash-view-notes-link');
    if (jumpNotes) jumpNotes.addEventListener('click', () => navigateTo('notes'));

    const jumpCal = document.getElementById('dash-view-calendar-link');
    if (jumpCal) jumpCal.addEventListener('click', () => navigateTo('calendar'));

    const jumpExp = document.getElementById('dash-view-expense-link');
    if (jumpExp) jumpExp.addEventListener('click', () => navigateTo('expense-tracker'));

    // Dashboard quick action buttons
    const qTask = document.getElementById('dash-quick-task-btn');
    if (qTask) qTask.addEventListener('click', () => openTaskModal());

    const qNote = document.getElementById('dash-quick-note-btn');
    if (qNote) qNote.addEventListener('click', () => openNoteModal());

    const qExp = document.getElementById('dash-quick-expense-btn');
    if (qExp) qExp.addEventListener('click', () => openExpenseModal());

    const qFocus = document.getElementById('dash-quick-focus-btn');
    if (qFocus) qFocus.addEventListener('click', () => {
      navigateTo('focus-mode');
      FocusTimer.start();
    });
  }

  // --------------------------------------------------------------------------
  // 9. COMMAND PALETTE & KEYBOARD SHORTCUTS
  // --------------------------------------------------------------------------
  const CommandPalette = {
    modal: null,
    input: null,
    results: null,
    selectedIndex: 0,
    filteredItems: [],

    init() {
      this.modal = document.getElementById('cmd-palette-modal');
      this.input = document.getElementById('cmd-palette-input');
      this.results = document.getElementById('cmd-results-list');

      const trigger = document.getElementById('cmd-palette-trigger');
      if (trigger) {
        trigger.addEventListener('click', () => this.open());
      }

      if (this.input) {
        this.input.addEventListener('input', () => this.filter());
        this.input.addEventListener('keydown', (e) => this.handleKeydown(e));
      }

      if (this.modal) {
        this.modal.addEventListener('click', (e) => {
          if (e.target === this.modal) this.close();
        });
      }
    },

    getCommands() {
      const commands = [
        { title: 'Navigate: Command Center', category: 'Navigation', action: () => navigateTo('command-center') },
        { title: 'Navigate: Task Manager', category: 'Navigation', action: () => navigateTo('task-manager') },
        { title: 'Navigate: Notes Vault', category: 'Navigation', action: () => navigateTo('notes') },
        { title: 'Navigate: Expense Tracker', category: 'Navigation', action: () => navigateTo('expense-tracker') },
        { title: 'Navigate: Focus Mode', category: 'Navigation', action: () => navigateTo('focus-mode') },
        { title: 'Navigate: Calendar', category: 'Navigation', action: () => navigateTo('calendar') },
        { title: 'Navigate: Calculator', category: 'Navigation', action: () => navigateTo('calculator') },
        { title: 'Navigate: Settings', category: 'Navigation', action: () => navigateTo('settings') },
        { title: 'Action: Add New Directive', category: 'Tasks', action: () => openTaskModal() },
        { title: 'Action: Create Neural Note', category: 'Notes', action: () => openNoteModal() },
        { title: 'Action: Log Financial Transaction', category: 'Finance', action: () => openExpenseModal() },
        { title: 'Action: Schedule Mission Event', category: 'Calendar', action: () => openEventModal() },
        { title: 'Action: Start 25m Pomodoro Focus', category: 'Focus', action: () => { navigateTo('focus-mode'); FocusTimer.setMode('work'); FocusTimer.start(); } },
        { title: 'Action: Toggle Theme Mode', category: 'Settings', action: () => toggleTheme() },
        { title: 'Action: Toggle Audio Haptics', category: 'Settings', action: () => toggleSound() },
        { title: 'Action: Export System Backup JSON', category: 'Data', action: () => exportData() }
      ];

      // Add dynamic tasks
      State.tasks.forEach(t => {
        commands.push({
          title: `Task: ${t.title}`,
          category: t.completed ? 'Completed Task' : 'Active Task',
          action: () => {
            navigateTo('task-manager');
            openTaskModal(t.id);
          }
        });
      });

      // Add dynamic notes
      State.notes.forEach(n => {
        commands.push({
          title: `Note: ${n.title}`,
          category: 'Notes Vault',
          action: () => {
            navigateTo('notes');
            openNoteModal(n.id);
          }
        });
      });

      return commands;
    },

    open() {
      Sound.playClick();
      this.modal.classList.remove('hidden');
      this.input.value = '';
      this.selectedIndex = 0;
      this.filter();
      setTimeout(() => this.input.focus(), 50);
    },

    close() {
      this.modal.classList.add('hidden');
    },

    filter() {
      const q = this.input.value.toLowerCase().trim();
      const all = this.getCommands();
      this.filteredItems = q ? all.filter(c => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)) : all;
      this.selectedIndex = 0;
      this.render();
    },

    render() {
      if (!this.results) return;
      if (this.filteredItems.length === 0) {
        this.results.innerHTML = `<div class="empty-state-card"><p>No matching commands or telemetry found.</p></div>`;
        return;
      }

      this.results.innerHTML = this.filteredItems.map((item, idx) => `
        <div class="cmd-result-item ${idx === this.selectedIndex ? 'selected' : ''}" data-idx="${idx}">
          <div class="cmd-item-left">
            <svg class="cmd-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span class="cmd-item-title">${escapeHtml(item.title)}</span>
          </div>
          <span class="cmd-item-cat">${escapeHtml(item.category)}</span>
        </div>
      `).join('');

      this.results.querySelectorAll('.cmd-result-item').forEach(el => {
        el.addEventListener('click', () => {
          const idx = parseInt(el.dataset.idx, 10);
          this.execute(idx);
        });
      });
    },

    execute(idx) {
      const item = this.filteredItems[idx];
      if (item && item.action) {
        this.close();
        item.action();
      }
    },

    handleKeydown(e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.selectedIndex = (this.selectedIndex + 1) % this.filteredItems.length;
        this.render();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.selectedIndex = (this.selectedIndex - 1 + this.filteredItems.length) % this.filteredItems.length;
        this.render();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        this.execute(this.selectedIndex);
      } else if (e.key === 'Escape') {
        this.close();
      }
    }
  };

  function setupGlobalShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Ctrl + K or Cmd + K: Command Palette
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        CommandPalette.open();
        return;
      }

      // Ctrl + B: Toggle Sidebar Collapse
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'b')) {
        e.preventDefault();
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.toggle('collapsed');
        return;
      }

      // Don't intercept single-key triggers if typing in an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        if (e.key === 'Escape') {
          closeAllModals();
        }
        return;
      }

      // Escape: Close any open modal
      if (e.key === 'Escape') {
        closeAllModals();
      }

      // ?: Open Shortcuts Dialog
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        openShortcutsModal();
      }

      // 1 to 8 Section Navigation
      if (e.key === '1') navigateTo('command-center');
      if (e.key === '2') navigateTo('task-manager');
      if (e.key === '3') navigateTo('notes');
      if (e.key === '4') navigateTo('expense-tracker');
      if (e.key === '5') navigateTo('focus-mode');
      if (e.key === '6') navigateTo('calendar');
      if (e.key === '7') navigateTo('calculator');
      if (e.key === '8') navigateTo('settings');
    });

    // Top action buttons
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => toggleSound());
    }

    const shortcutsBtn = document.getElementById('shortcuts-modal-btn');
    if (shortcutsBtn) {
      shortcutsBtn.addEventListener('click', () => openShortcutsModal());
    }

    const fsBtn = document.getElementById('fullscreen-btn');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => toggleFullscreen());
    }
  }

  function toggleSound() {
    State.settings.soundEnabled = !State.settings.soundEnabled;
    State.save(APP_STORAGE_KEYS.SETTINGS, State.settings);
    updateSoundUI();
    showToast(`Audio FX ${State.settings.soundEnabled ? 'ONLINE' : 'MUTED'}`, 'info');
  }

  function updateSoundUI() {
    const onIcon = document.getElementById('sound-icon-on');
    const offIcon = document.getElementById('sound-icon-off');
    const toggleInput = document.getElementById('setting-sound-toggle');

    if (onIcon && offIcon) {
      if (State.settings.soundEnabled) {
        onIcon.classList.remove('hidden');
        offIcon.classList.add('hidden');
      } else {
        onIcon.classList.add('hidden');
        offIcon.classList.remove('hidden');
      }
    }
    if (toggleInput) {
      toggleInput.checked = State.settings.soundEnabled;
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hidden'));
  }

  function openShortcutsModal() {
    const modal = document.getElementById('shortcuts-modal');
    if (modal) modal.classList.remove('hidden');
  }

  // --------------------------------------------------------------------------
  // 10. SECTION 1: COMMAND CENTER (DASHBOARD)
  // --------------------------------------------------------------------------
  function renderDashboard() {
    // Dynamic greeting based on current local hour
    const now = new Date();
    const hour = now.getHours();
    let greet = 'Good Evening';
    if (hour >= 4 && hour < 12) greet = 'Good Morning';
    else if (hour >= 12 && hour < 17) greet = 'Good Afternoon';
    else if (hour >= 17 && hour < 22) greet = 'Good Evening';
    else greet = 'Good Night';

    const greetingElem = document.getElementById('hero-greeting');
    if (greetingElem) {
      greetingElem.textContent = `${greet}, ${State.settings.userName}.`;
    }

    // Task counts
    const totalTasks = State.tasks.length;
    const completedTasks = State.tasks.filter(t => t.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    const pct = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Today's events count
    const todayStr = now.toISOString().split('T')[0];
    const todayEvents = State.events.filter(e => e.date === todayStr);

    const heroPending = document.getElementById('hero-pending-count');
    if (heroPending) heroPending.textContent = `${pendingTasks} pending directives`;

    const heroEvents = document.getElementById('hero-event-count');
    if (heroEvents) heroEvents.textContent = `${todayEvents.length} events`;

    // Productivity ring
    const ring = document.getElementById('dash-productivity-ring');
    const ringPct = document.getElementById('dash-productivity-pct');
    const ringRatio = document.getElementById('dash-tasks-done-ratio');
    if (ring && ringPct && ringRatio) {
      const circumference = 314.15; // 2 * PI * 50
      const offset = circumference - (pct / 100) * circumference;
      ring.style.strokeDashoffset = offset;
      ringPct.textContent = `${pct}%`;
      ringRatio.textContent = `${completedTasks}/${totalTasks}`;
    }

    // Focus & Balance in gauge meta
    const focusVal = document.getElementById('dash-focus-time-val');
    if (focusVal) focusVal.textContent = `${State.focus.totalMinutesToday}m`;

    const netBal = calculateNetBalance();
    const balancePreview = document.getElementById('dash-balance-preview');
    if (balancePreview) balancePreview.textContent = formatCurrency(netBal);

    // 4 Stat Cards
    const statTotal = document.getElementById('dash-stat-total-tasks');
    const statCompleted = document.getElementById('dash-stat-completed-tasks');
    const statCompletedPct = document.getElementById('dash-stat-completed-pct');
    const statPending = document.getElementById('dash-stat-pending-tasks');
    const statPendingAlert = document.getElementById('dash-stat-pending-alert');
    const statBalance = document.getElementById('dash-stat-balance');
    const statSavings = document.getElementById('dash-stat-savings-rate');

    if (statTotal) statTotal.textContent = totalTasks;
    if (statCompleted) statCompleted.textContent = completedTasks;
    if (statCompletedPct) statCompletedPct.textContent = `${pct}% Rate`;
    if (statPending) statPending.textContent = pendingTasks;
    if (statPendingAlert) statPendingAlert.textContent = pendingTasks > 0 ? 'Action Needed' : 'All Clear';
    if (statBalance) statBalance.textContent = formatCurrency(netBal);

    // Progress lines
    const pTasks = document.getElementById('dash-progress-tasks');
    const pComp = document.getElementById('dash-progress-completed');
    const pPend = document.getElementById('dash-progress-pending');
    if (pTasks) pTasks.style.width = '100%';
    if (pComp) pComp.style.width = `${pct}%`;
    if (pPend) pPend.style.width = `${100 - pct}%`;

    // Calculate savings rate
    const totalInflow = State.expenses.filter(e => e.type === 'income').reduce((acc, e) => acc + e.amount, 0);
    const totalOutflow = State.expenses.filter(e => e.type === 'expense').reduce((acc, e) => acc + e.amount, 0);
    const savingsRate = totalInflow > 0 ? Math.max(0, Math.round(((totalInflow - totalOutflow) / totalInflow) * 100)) : 0;
    if (statSavings) statSavings.textContent = `${savingsRate}% Savings`;

    // Priority Directives (Active high & medium tasks)
    const priorityContainer = document.getElementById('dash-priority-tasks-list');
    if (priorityContainer) {
      const activePriority = State.tasks.filter(t => !t.completed).sort((a, b) => (a.priority === 'high' ? -1 : 1)).slice(0, 4);
      if (activePriority.length === 0) {
        priorityContainer.innerHTML = `
          <div class="empty-state-card">
            <p>No high priority directives pending. All systems optimal.</p>
          </div>
        `;
      } else {
        priorityContainer.innerHTML = activePriority.map(t => `
          <div class="dash-list-item">
            <div class="dash-item-left">
              <label class="cyber-checkbox-label" title="Complete Directive">
                <input type="checkbox" data-task-id="${t.id}" class="dash-task-check">
                <span class="cyber-checkbox-custom"></span>
              </label>
              <div>
                <div class="dash-item-title">${escapeHtml(t.title)}</div>
                <div class="dash-item-meta">Due: ${t.dueDate || 'Unspecified'} &bull; ${t.category}</div>
              </div>
            </div>
            <span class="badge-priority ${t.priority}">${t.priority}</span>
          </div>
        `).join('');

        priorityContainer.querySelectorAll('.dash-task-check').forEach(chk => {
          chk.addEventListener('change', (e) => {
            const id = e.target.dataset.taskId;
            toggleTaskComplete(id);
          });
        });
      }
    }

    // Recent Notes Preview
    const notesContainer = document.getElementById('dash-recent-notes-list');
    if (notesContainer) {
      const recentNotes = State.notes.slice(0, 4);
      if (recentNotes.length === 0) {
        notesContainer.innerHTML = `<div class="empty-state-card" style="grid-column: 1/-1;"><p>No notes logged in the neural vault.</p></div>`;
      } else {
        notesContainer.innerHTML = recentNotes.map(n => `
          <div class="dash-note-mini-card" data-note-id="${n.id}">
            <div class="dash-note-title">${escapeHtml(n.title)}</div>
            <div class="dash-note-snippet">${escapeHtml(n.content)}</div>
          </div>
        `).join('');

        notesContainer.querySelectorAll('.dash-note-mini-card').forEach(card => {
          card.addEventListener('click', () => {
            const id = card.dataset.noteId;
            navigateTo('notes');
            openNoteModal(id);
          });
        });
      }
    }

    // Upcoming Events Preview
    const eventsContainer = document.getElementById('dash-upcoming-events-list');
    if (eventsContainer) {
      const upcoming = State.events.slice().sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3);
      if (upcoming.length === 0) {
        eventsContainer.innerHTML = `<div class="empty-state-card"><p>No upcoming missions or schedule entries.</p></div>`;
      } else {
        eventsContainer.innerHTML = upcoming.map(ev => `
          <div class="dash-list-item">
            <div class="dash-item-left">
              <span class="card-dot-indicator ${ev.badgeColor || 'cyan'}"></span>
              <div>
                <div class="dash-item-title">${escapeHtml(ev.title)}</div>
                <div class="dash-item-meta">${ev.date} ${ev.time ? 'at ' + ev.time : ''} &bull; ${ev.category}</div>
              </div>
            </div>
          </div>
        `).join('');
      }
    }

    // Financial Velocity mini summary & canvas chart
    const dashInflow = document.getElementById('dash-total-income');
    const dashOutflow = document.getElementById('dash-total-expense');
    const dashReserve = document.getElementById('dash-net-reserve');
    if (dashInflow) dashInflow.textContent = formatCurrency(totalInflow);
    if (dashOutflow) dashOutflow.textContent = formatCurrency(totalOutflow);
    if (dashReserve) dashReserve.textContent = formatCurrency(netBal);

    drawMiniFinanceChart(totalInflow, totalOutflow);

    // Update sidebar badges
    updateSidebarBadges();
  }

  function drawMiniFinanceChart(inflow, outflow) {
    const canvas = document.getElementById('dash-mini-finance-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    const maxVal = Math.max(inflow, outflow, 100);
    const inH = Math.max(8, (inflow / maxVal) * (h - 35));
    const outH = Math.max(8, (outflow / maxVal) * (h - 35));

    const barW = 50;
    const gap = 40;
    const startX = (w - (barW * 2 + gap)) / 2;

    // Draw Inflow bar (Green)
    const inX = startX;
    const inY = h - inH - 20;
    const gradIn = ctx.createLinearGradient(inX, inY, inX, h - 20);
    gradIn.addColorStop(0, '#10b981');
    gradIn.addColorStop(1, 'rgba(16, 185, 129, 0.2)');
    ctx.fillStyle = gradIn;
    roundRect(ctx, inX, inY, barW, inH, 4);
    ctx.fill();

    // Draw Outflow bar (Red/Magenta)
    const outX = startX + barW + gap;
    const outY = h - outH - 20;
    const gradOut = ctx.createLinearGradient(outX, outY, outX, h - 20);
    gradOut.addColorStop(0, '#f43f5e');
    gradOut.addColorStop(1, 'rgba(244, 63, 94, 0.2)');
    ctx.fillStyle = gradOut;
    roundRect(ctx, outX, outY, barW, outH, 4);
    ctx.fill();

    // Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('INFLOW', inX + barW / 2, h - 5);
    ctx.fillText('OUTFLOW', outX + barW / 2, h - 5);
  }

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  function updateSidebarBadges() {
    const taskBadge = document.getElementById('sidebar-task-badge');
    const notesBadge = document.getElementById('sidebar-notes-badge');
    const expenseBadge = document.getElementById('sidebar-expense-badge');
    const calBadge = document.getElementById('sidebar-calendar-badge');

    const pendingTasks = State.tasks.filter(t => !t.completed).length;
    if (taskBadge) taskBadge.textContent = pendingTasks;
    if (notesBadge) notesBadge.textContent = State.notes.length;
    if (expenseBadge) expenseBadge.textContent = formatCurrency(calculateNetBalance(), true);
    if (calBadge) calBadge.textContent = State.events.length;
  }

  // --------------------------------------------------------------------------
  // 11. SECTION 2: TASK MANAGER
  // --------------------------------------------------------------------------
  let taskFilter = 'all';
  let taskSearchQuery = '';

  function setupTaskManager() {
    // Search input
    const searchInput = document.getElementById('task-search-input');
    const clearBtn = document.getElementById('task-search-clear');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        taskSearchQuery = e.target.value.toLowerCase().trim();
        if (clearBtn) clearBtn.classList.toggle('hidden', !taskSearchQuery);
        renderTasks();
      });
    }
    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        taskSearchQuery = '';
        clearBtn.classList.add('hidden');
        renderTasks();
      });
    }

    // Filter pills
    document.querySelectorAll('.filter-tab-pills .filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab-pills .filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        taskFilter = pill.dataset.filter;
        renderTasks();
        Sound.playClick();
      });
    });

    // Add task modal triggers
    const addBtn = document.getElementById('open-task-modal-btn');
    if (addBtn) addBtn.addEventListener('click', () => openTaskModal());

    const taskForm = document.getElementById('task-form');
    if (taskForm) {
      taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveTaskFromModal();
      });
    }

    const cancelBtn = document.getElementById('task-modal-cancel');
    const closeBtn = document.getElementById('task-modal-close');
    if (cancelBtn) cancelBtn.addEventListener('click', () => closeTaskModal());
    if (closeBtn) closeBtn.addEventListener('click', () => closeTaskModal());

    // Clear completed tasks
    const clearCompBtn = document.getElementById('clear-completed-tasks-btn');
    if (clearCompBtn) {
      clearCompBtn.addEventListener('click', () => {
        const completedCount = State.tasks.filter(t => t.completed).length;
        if (completedCount === 0) {
          showToast('No completed tasks to purge.', 'info');
          return;
        }
        State.tasks = State.tasks.filter(t => !t.completed);
        State.save(APP_STORAGE_KEYS.TASKS, State.tasks);
        renderTasks();
        renderDashboard();
        showToast(`Cleared ${completedCount} completed tasks.`, 'success');
      });
    }
  }

  function renderTasks() {
    const pendingContainer = document.getElementById('pending-tasks-container');
    const completedContainer = document.getElementById('completed-tasks-container');
    if (!pendingContainer || !completedContainer) return;

    // Filter logic
    let tasks = State.tasks.slice();

    if (taskSearchQuery) {
      tasks = tasks.filter(t => 
        t.title.toLowerCase().includes(taskSearchQuery) || 
        (t.desc && t.desc.toLowerCase().includes(taskSearchQuery)) ||
        (t.category && t.category.toLowerCase().includes(taskSearchQuery))
      );
    }

    if (taskFilter === 'high' || taskFilter === 'medium' || taskFilter === 'low') {
      tasks = tasks.filter(t => t.priority === taskFilter);
    }

    const pending = tasks.filter(t => !t.completed);
    const completed = tasks.filter(t => t.completed);

    // Update filter counts
    const countAll = document.getElementById('task-count-all');
    const countPending = document.getElementById('task-count-pending');
    const countCompleted = document.getElementById('task-count-completed');
    const colPending = document.getElementById('pending-column-count');
    const colCompleted = document.getElementById('completed-column-count');

    if (countAll) countAll.textContent = State.tasks.length;
    if (countPending) countPending.textContent = State.tasks.filter(t => !t.completed).length;
    if (countCompleted) countCompleted.textContent = State.tasks.filter(t => t.completed).length;
    if (colPending) colPending.textContent = pending.length;
    if (colCompleted) colCompleted.textContent = completed.length;

    // Render Pending Column
    if (taskFilter === 'completed') {
      pendingContainer.innerHTML = `<div class="empty-state-card"><p>Showing completed archive only.</p></div>`;
    } else if (pending.length === 0) {
      pendingContainer.innerHTML = `
        <div class="empty-state-card">
          <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <div class="empty-state-title">No Pending Directives</div>
          <div class="empty-state-desc">All operations in this filter are accomplished or none exist.</div>
          <button class="btn btn-primary btn-xs" onclick="window.Orbit.openTaskModal()">+ Add Directive</button>
        </div>
      `;
    } else {
      pendingContainer.innerHTML = pending.map(t => createTaskCardHtml(t)).join('');
    }

    // Render Completed Column
    if (taskFilter === 'pending' || taskFilter === 'high' || taskFilter === 'medium' || taskFilter === 'low') {
      completedContainer.innerHTML = `<div class="empty-state-card"><p>Filtered view active.</p></div>`;
    } else if (completed.length === 0) {
      completedContainer.innerHTML = `
        <div class="empty-state-card">
          <p>No completed directives archived yet.</p>
        </div>
      `;
    } else {
      completedContainer.innerHTML = completed.map(t => createTaskCardHtml(t)).join('');
    }

    // Attach event listeners
    attachTaskCardEvents(pendingContainer);
    attachTaskCardEvents(completedContainer);

    // Update focus task select dropdown
    populateFocusTaskOptions();
  }

  function createTaskCardHtml(task) {
    const isOverdue = !task.completed && task.dueDate && new Date(task.dueDate) < new Date(new Date().toDateString());
    return `
      <div class="task-card priority-${task.priority} ${task.completed ? 'completed' : ''}" data-task-id="${task.id}">
        <label class="cyber-checkbox-label" title="${task.completed ? 'Mark Pending' : 'Mark Completed'}">
          <input type="checkbox" class="task-card-check" ${task.completed ? 'checked' : ''}>
          <span class="cyber-checkbox-custom"></span>
        </label>
        <div class="task-content-area">
          <div class="task-title-row">
            <span class="task-title">${escapeHtml(task.title)}</span>
            <div class="task-badges">
              <span class="badge-priority ${task.priority}">${task.priority}</span>
              ${task.category ? `<span class="badge-cat">${escapeHtml(task.category)}</span>` : ''}
            </div>
          </div>
          ${task.desc ? `<p class="task-desc">${escapeHtml(task.desc)}</p>` : ''}
          <div class="task-footer-meta">
            <span class="task-due-date ${isOverdue ? 'overdue' : ''}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${isOverdue ? 'OVERDUE: ' : 'Due: '} ${task.dueDate || 'Open'}
            </span>
            <div class="task-item-actions">
              <button class="task-action-btn edit" title="Edit Directive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </button>
              <button class="task-action-btn delete" title="Delete Directive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function attachTaskCardEvents(container) {
    container.querySelectorAll('.task-card').forEach(card => {
      const id = card.dataset.taskId;

      // Checkbox complete toggle
      const check = card.querySelector('.task-card-check');
      if (check) {
        check.addEventListener('change', () => toggleTaskComplete(id));
      }

      // Edit button
      const editBtn = card.querySelector('.task-action-btn.edit');
      if (editBtn) {
        editBtn.addEventListener('click', () => openTaskModal(id));
      }

      // Delete button
      const delBtn = card.querySelector('.task-action-btn.delete');
      if (delBtn) {
        delBtn.addEventListener('click', () => deleteTask(id));
      }
    });
  }

  function toggleTaskComplete(id) {
    const task = State.tasks.find(t => t.id === id);
    if (!task) return;
    task.completed = !task.completed;
    State.save(APP_STORAGE_KEYS.TASKS, State.tasks);

    if (task.completed) {
      Sound.playSuccess();
      showToast(`Directive accomplished: "${task.title}"`, 'success');
    } else {
      Sound.playClick();
      showToast(`Directive reactivated: "${task.title}"`, 'info');
    }

    renderTasks();
    renderDashboard();
  }

  function deleteTask(id) {
    const task = State.tasks.find(t => t.id === id);
    const title = task ? task.title : 'Task';
    State.tasks = State.tasks.filter(t => t.id !== id);
    State.save(APP_STORAGE_KEYS.TASKS, State.tasks);
    Sound.playClick();
    showToast(`Deleted directive: "${title}"`, 'warning');
    renderTasks();
    renderDashboard();
  }

  function openTaskModal(taskId = null) {
    const modal = document.getElementById('task-modal');
    const titleElem = document.getElementById('task-modal-title');
    const idInput = document.getElementById('task-id-input');
    const titleInput = document.getElementById('task-title-input');
    const descInput = document.getElementById('task-desc-input');
    const prioSelect = document.getElementById('task-priority-select');
    const catSelect = document.getElementById('task-category-select');
    const dueInput = document.getElementById('task-due-date-input');

    if (!modal) return;

    if (taskId) {
      const t = State.tasks.find(x => x.id === taskId);
      if (t) {
        titleElem.textContent = 'Edit Directive';
        idInput.value = t.id;
        titleInput.value = t.title;
        descInput.value = t.desc || '';
        prioSelect.value = t.priority;
        catSelect.value = t.category || 'Work';
        dueInput.value = t.dueDate || '';
      }
    } else {
      titleElem.textContent = 'New Directive';
      idInput.value = '';
      titleInput.value = '';
      descInput.value = '';
      prioSelect.value = 'medium';
      catSelect.value = 'Work';
      dueInput.value = new Date().toISOString().split('T')[0];
    }

    modal.classList.remove('hidden');
    Sound.playClick();
    setTimeout(() => titleInput.focus(), 50);
  }

  function closeTaskModal() {
    const modal = document.getElementById('task-modal');
    if (modal) modal.classList.add('hidden');
  }

  function saveTaskFromModal() {
    const id = document.getElementById('task-id-input').value;
    const title = document.getElementById('task-title-input').value.trim();
    const desc = document.getElementById('task-desc-input').value.trim();
    const priority = document.getElementById('task-priority-select').value;
    const category = document.getElementById('task-category-select').value;
    const dueDate = document.getElementById('task-due-date-input').value;

    if (!title) {
      showToast('Directive title cannot be empty.', 'danger');
      return;
    }

    if (id) {
      const task = State.tasks.find(t => t.id === id);
      if (task) {
        task.title = title;
        task.desc = desc;
        task.priority = priority;
        task.category = category;
        task.dueDate = dueDate;
        showToast('Directive updated successfully.', 'success');
      }
    } else {
      const newTask = {
        id: 't-' + Date.now(),
        title,
        desc,
        priority,
        category,
        dueDate,
        completed: false,
        createdAt: new Date().toISOString()
      };
      State.tasks.unshift(newTask);
      showToast('New directive committed to matrix.', 'success');
    }

    State.save(APP_STORAGE_KEYS.TASKS, State.tasks);
    closeTaskModal();
    renderTasks();
    renderDashboard();
  }

  // --------------------------------------------------------------------------
  // 12. SECTION 3: NOTES APPLICATION
  // --------------------------------------------------------------------------
  let noteCategoryFilter = 'all';
  let noteSearchQuery = '';

  function setupNotesVault() {
    // Search input
    const searchInput = document.getElementById('note-search-input');
    const clearBtn = document.getElementById('note-search-clear');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        noteSearchQuery = e.target.value.toLowerCase().trim();
        if (clearBtn) clearBtn.classList.toggle('hidden', !noteSearchQuery);
        renderNotes();
      });
    }
    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        noteSearchQuery = '';
        clearBtn.classList.add('hidden');
        renderNotes();
      });
    }

    // Category filter pills
    document.querySelectorAll('#note-category-filters .filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('#note-category-filters .filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        noteCategoryFilter = pill.dataset.noteCat;
        renderNotes();
        Sound.playClick();
      });
    });

    // Color picker in note modal
    document.querySelectorAll('#note-color-picker .color-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        document.querySelectorAll('#note-color-picker .color-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        const color = dot.dataset.color;
        document.getElementById('note-color-val').value = color;
        Sound.playClick();
      });
    });

    // Content live word / char counter
    const noteContentInput = document.getElementById('note-content-input');
    if (noteContentInput) {
      noteContentInput.addEventListener('input', () => {
        updateNoteCounters(noteContentInput.value);
      });
    }

    // Modal triggers
    const addBtn = document.getElementById('open-note-modal-btn');
    if (addBtn) addBtn.addEventListener('click', () => openNoteModal());

    const noteForm = document.getElementById('note-form');
    if (noteForm) {
      noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveNoteFromModal();
      });
    }

    const cancelBtn = document.getElementById('note-modal-cancel');
    const closeBtn = document.getElementById('note-modal-close');
    if (cancelBtn) cancelBtn.addEventListener('click', () => closeNoteModal());
    if (closeBtn) closeBtn.addEventListener('click', () => closeNoteModal());
  }

  function updateNoteCounters(text) {
    const wordCountElem = document.getElementById('note-word-count');
    const charCountElem = document.getElementById('note-char-count');
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    if (wordCountElem) wordCountElem.textContent = `${words} words`;
    if (charCountElem) charCountElem.textContent = `${chars} characters`;
  }

  function renderNotes() {
    const container = document.getElementById('notes-grid-container');
    if (!container) return;

    let notes = State.notes.slice();

    // Filter by search
    if (noteSearchQuery) {
      notes = notes.filter(n => 
        n.title.toLowerCase().includes(noteSearchQuery) || 
        n.content.toLowerCase().includes(noteSearchQuery) ||
        (n.category && n.category.toLowerCase().includes(noteSearchQuery))
      );
    }

    // Filter by category
    if (noteCategoryFilter !== 'all') {
      notes = notes.filter(n => n.category === noteCategoryFilter);
    }

    if (notes.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card" style="grid-column: 1 / -1;">
          <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <div class="empty-state-title">No Neural Notes Recorded</div>
          <div class="empty-state-desc">Capture tactical thoughts, formulas, or logs into your offline vault.</div>
          <button class="btn btn-primary btn-xs" onclick="window.Orbit.openNoteModal()">+ Create Note</button>
        </div>
      `;
      return;
    }

    container.innerHTML = notes.map(note => {
      const dateStr = new Date(note.updatedAt || note.createdAt).toLocaleDateString(undefined, {
        month: 'short', day: 'numeric', year: 'numeric'
      });
      return `
        <div class="note-card glow-${note.color || 'cyan'}" data-note-id="${note.id}">
          <div class="note-header-row">
            <h3 class="note-title">${escapeHtml(note.title)}</h3>
            <span class="note-cat-tag">${escapeHtml(note.category || 'General')}</span>
          </div>
          <p class="note-body-excerpt">${escapeHtml(note.content)}</p>
          <div class="note-footer-row">
            <span>${dateStr}</span>
            <div class="note-actions-strip">
              <button class="task-action-btn edit" title="Edit Note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </button>
              <button class="task-action-btn delete" title="Delete Note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach card clicks
    container.querySelectorAll('.note-card').forEach(card => {
      const id = card.dataset.noteId;
      card.addEventListener('click', (e) => {
        if (e.target.closest('.task-action-btn')) return;
        openNoteModal(id);
      });

      const editBtn = card.querySelector('.task-action-btn.edit');
      if (editBtn) editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openNoteModal(id);
      });

      const delBtn = card.querySelector('.task-action-btn.delete');
      if (delBtn) delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteNote(id);
      });
    });
  }

  function openNoteModal(noteId = null) {
    const modal = document.getElementById('note-modal');
    const titleElem = document.getElementById('note-modal-title');
    const idInput = document.getElementById('note-id-input');
    const titleInput = document.getElementById('note-title-input');
    const catInput = document.getElementById('note-category-input');
    const contentInput = document.getElementById('note-content-input');
    const colorVal = document.getElementById('note-color-val');

    if (!modal) return;

    if (noteId) {
      const n = State.notes.find(x => x.id === noteId);
      if (n) {
        titleElem.textContent = 'Edit Neural Note';
        idInput.value = n.id;
        titleInput.value = n.title;
        catInput.value = n.category || 'General';
        contentInput.value = n.content || '';
        colorVal.value = n.color || 'cyan';

        // Select color dot
        document.querySelectorAll('#note-color-picker .color-dot').forEach(d => {
          d.classList.toggle('active', d.dataset.color === colorVal.value);
        });
        updateNoteCounters(contentInput.value);
      }
    } else {
      titleElem.textContent = 'Create Neural Note';
      idInput.value = '';
      titleInput.value = '';
      catInput.value = 'General';
      contentInput.value = '';
      colorVal.value = 'cyan';
      document.querySelectorAll('#note-color-picker .color-dot').forEach(d => {
        d.classList.toggle('active', d.dataset.color === 'cyan');
      });
      updateNoteCounters('');
    }

    modal.classList.remove('hidden');
    Sound.playClick();
    setTimeout(() => titleInput.focus(), 50);
  }

  function closeNoteModal() {
    const modal = document.getElementById('note-modal');
    if (modal) modal.classList.add('hidden');
  }

  function saveNoteFromModal() {
    const id = document.getElementById('note-id-input').value;
    const title = document.getElementById('note-title-input').value.trim();
    const category = document.getElementById('note-category-input').value;
    const content = document.getElementById('note-content-input').value.trim();
    const color = document.getElementById('note-color-val').value || 'cyan';

    if (!title) {
      showToast('Note title is required.', 'danger');
      return;
    }

    if (id) {
      const note = State.notes.find(n => n.id === id);
      if (note) {
        note.title = title;
        note.category = category;
        note.content = content;
        note.color = color;
        note.updatedAt = new Date().toISOString();
        showToast('Neural note saved.', 'success');
      }
    } else {
      const newNote = {
        id: 'n-' + Date.now(),
        title,
        category,
        content,
        color,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      State.notes.unshift(newNote);
      showToast('New note committed to vault.', 'success');
    }

    State.save(APP_STORAGE_KEYS.NOTES, State.notes);
    closeNoteModal();
    renderNotes();
    renderDashboard();
  }

  function deleteNote(id) {
    const note = State.notes.find(n => n.id === id);
    const title = note ? note.title : 'Note';
    State.notes = State.notes.filter(n => n.id !== id);
    State.save(APP_STORAGE_KEYS.NOTES, State.notes);
    Sound.playClick();
    showToast(`Note deleted: "${title}"`, 'warning');
    renderNotes();
    renderDashboard();
  }

  // --------------------------------------------------------------------------
  // 13. SECTION 4: EXPENSE TRACKER
  // --------------------------------------------------------------------------
  let expenseFilterCategory = 'all';
  let expenseFilterType = 'all';

  function setupExpenseTracker() {
    // Filter selects
    const catSelect = document.getElementById('expense-filter-category');
    const typeSelect = document.getElementById('expense-filter-type');
    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        expenseFilterCategory = e.target.value;
        renderExpenses();
      });
    }
    if (typeSelect) {
      typeSelect.addEventListener('change', (e) => {
        expenseFilterType = e.target.value;
        renderExpenses();
      });
    }

    // Modal type toggle buttons
    const typeIncome = document.getElementById('type-btn-income');
    const typeExpense = document.getElementById('type-btn-expense');
    const typeHidden = document.getElementById('expense-type-val');

    if (typeIncome && typeExpense && typeHidden) {
      typeIncome.addEventListener('click', () => {
        typeIncome.classList.add('active');
        typeExpense.classList.remove('active');
        typeHidden.value = 'income';
        Sound.playClick();
      });
      typeExpense.addEventListener('click', () => {
        typeExpense.classList.add('active');
        typeIncome.classList.remove('active');
        typeHidden.value = 'expense';
        Sound.playClick();
      });
    }

    // Add modal triggers
    const addBtn = document.getElementById('open-expense-modal-btn');
    if (addBtn) addBtn.addEventListener('click', () => openExpenseModal());

    const expenseForm = document.getElementById('expense-form');
    if (expenseForm) {
      expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveExpenseFromModal();
      });
    }

    const cancelBtn = document.getElementById('expense-modal-cancel');
    const closeBtn = document.getElementById('expense-modal-close');
    if (cancelBtn) cancelBtn.addEventListener('click', () => closeExpenseModal());
    if (closeBtn) closeBtn.addEventListener('click', () => closeExpenseModal());
  }

  function calculateNetBalance() {
    let income = 0;
    let expense = 0;
    State.expenses.forEach(e => {
      if (e.type === 'income') income += Number(e.amount);
      else expense += Number(e.amount);
    });
    return income - expense;
  }

  function formatCurrency(num, compact = false) {
    if (compact && Math.abs(num) >= 1000) {
      return '$' + (num / 1000).toFixed(1) + 'k';
    }
    return '$' + Number(num).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function renderExpenses() {
    let list = State.expenses.slice().sort((a, b) => b.date.localeCompare(a.date));

    // Calculate totals
    const totalIncome = State.expenses.filter(e => e.type === 'income').reduce((acc, e) => acc + Number(e.amount), 0);
    const totalExpenses = State.expenses.filter(e => e.type === 'expense').reduce((acc, e) => acc + Number(e.amount), 0);
    const netBalance = totalIncome - totalExpenses;

    const incElem = document.getElementById('expense-total-income');
    const expElem = document.getElementById('expense-total-outflow');
    const balElem = document.getElementById('expense-net-balance');

    if (incElem) incElem.textContent = formatCurrency(totalIncome);
    if (expElem) expElem.textContent = formatCurrency(totalExpenses);
    if (balElem) balElem.textContent = formatCurrency(netBalance);

    // Filter table list
    if (expenseFilterCategory !== 'all') {
      list = list.filter(e => e.category === expenseFilterCategory);
    }
    if (expenseFilterType !== 'all') {
      list = list.filter(e => e.type === expenseFilterType);
    }

    const tbody = document.getElementById('expense-transactions-tbody');
    if (tbody) {
      if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 28px; color: var(--text-dim);">No transactions found matching criteria.</td></tr>`;
      } else {
        tbody.innerHTML = list.map(item => `
          <tr data-id="${item.id}">
            <td style="font-family: var(--font-mono);">${item.date}</td>
            <td><strong>${escapeHtml(item.desc)}</strong></td>
            <td><span class="badge-cat">${escapeHtml(item.category)}</span></td>
            <td><span class="badge-priority ${item.type === 'income' ? 'low' : 'high'}">${item.type.toUpperCase()}</span></td>
            <td class="amount-pill ${item.type}">${item.type === 'income' ? '+' : '-'}${formatCurrency(item.amount)}</td>
            <td>
              <button class="task-action-btn delete" title="Delete Transaction" data-expense-id="${item.id}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </td>
          </tr>
        `).join('');

        tbody.querySelectorAll('.task-action-btn.delete').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.dataset.expenseId;
            deleteExpense(id);
          });
        });
      }
    }

    // Render Canvas Charts
    drawExpenseDonutChart();
    drawExpenseBarChart(totalIncome, totalExpenses);
    updateSidebarBadges();
  }

  function drawExpenseDonutChart() {
    const canvas = document.getElementById('expense-donut-chart');
    const legend = document.getElementById('expense-chart-legend');
    if (!canvas || !legend) return;

    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Group expenses by category
    const catTotals = {};
    let totalExpense = 0;
    State.expenses.filter(e => e.type === 'expense').forEach(e => {
      catTotals[e.category] = (catTotals[e.category] || 0) + Number(e.amount);
      totalExpense += Number(e.amount);
    });

    const palette = [
      '#00f0ff', '#a855f7', '#10b981', '#f59e0b', '#ec4899', '#3b82f6', '#f43f5e', '#64748b'
    ];

    const categories = Object.keys(catTotals);

    if (categories.length === 0 || totalExpense === 0) {
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 70, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 24;
      ctx.stroke();

      legend.innerHTML = `<span style="color: var(--text-dim); font-size: 12px;">No expense data logged.</span>`;
      return;
    }

    const cx = w / 2;
    const cy = h / 2;
    const radius = 70;
    const lineWidth = 24;
    let startAngle = -Math.PI / 2;

    legend.innerHTML = '';

    categories.forEach((cat, idx) => {
      const val = catTotals[cat];
      const sliceAngle = (val / totalExpense) * (Math.PI * 2);
      const color = palette[idx % palette.length];

      ctx.beginPath();
      ctx.arc(cx, cy, radius, startAngle, startAngle + sliceAngle);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      startAngle += sliceAngle;

      // Add to legend
      const pct = Math.round((val / totalExpense) * 100);
      legend.innerHTML += `
        <div class="legend-item">
          <span class="legend-color-dot" style="background: ${color};"></span>
          <span class="legend-name">${escapeHtml(cat)} (${pct}%)</span>
          <span class="legend-amount">${formatCurrency(val)}</span>
        </div>
      `;
    });

    // Center text
    ctx.fillStyle = '#fff';
    ctx.font = '700 16px "Orbitron", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('OUTFLOW', cx, cy - 8);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.fillText(formatCurrency(totalExpense, true), cx, cy + 12);
  }

  function drawExpenseBarChart(inflow, outflow) {
    const canvas = document.getElementById('expense-bar-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const max = Math.max(inflow, outflow, 500);
    const barWidth = 60;
    const spacing = 50;
    const startX = (w - (barWidth * 2 + spacing)) / 2;

    const inH = Math.max(12, (inflow / max) * (h - 60));
    const outH = Math.max(12, (outflow / max) * (h - 60));

    // Inflow Bar
    const inX = startX;
    const inY = h - inH - 30;
    const grad1 = ctx.createLinearGradient(inX, inY, inX, h - 30);
    grad1.addColorStop(0, '#10b981');
    grad1.addColorStop(1, 'rgba(16, 185, 129, 0.2)');
    ctx.fillStyle = grad1;
    roundRect(ctx, inX, inY, barWidth, inH, 6);
    ctx.fill();

    // Outflow Bar
    const outX = startX + barWidth + spacing;
    const outY = h - outH - 30;
    const grad2 = ctx.createLinearGradient(outX, outY, outX, h - 30);
    grad2.addColorStop(0, '#f43f5e');
    grad2.addColorStop(1, 'rgba(244, 63, 94, 0.2)');
    ctx.fillStyle = grad2;
    roundRect(ctx, outX, outY, barWidth, outH, 6);
    ctx.fill();

    // Values on top
    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#10b981';
    ctx.fillText(formatCurrency(inflow, true), inX + barWidth / 2, inY - 8);

    ctx.fillStyle = '#f43f5e';
    ctx.fillText(formatCurrency(outflow, true), outX + barWidth / 2, outY - 8);

    // Labels below
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px "Space Grotesk", sans-serif';
    ctx.fillText('TOTAL INFLOW', inX + barWidth / 2, h - 10);
    ctx.fillText('TOTAL OUTFLOW', outX + barWidth / 2, h - 10);
  }

  function openExpenseModal() {
    const modal = document.getElementById('expense-modal');
    if (!modal) return;
    document.getElementById('expense-form').reset();
    document.getElementById('expense-id-input').value = '';
    document.getElementById('expense-date-input').value = new Date().toISOString().split('T')[0];
    document.getElementById('type-btn-expense').click();

    modal.classList.remove('hidden');
    Sound.playClick();
    setTimeout(() => document.getElementById('expense-amount-input').focus(), 50);
  }

  function closeExpenseModal() {
    const modal = document.getElementById('expense-modal');
    if (modal) modal.classList.add('hidden');
  }

  function saveExpenseFromModal() {
    const desc = document.getElementById('expense-desc-input').value.trim();
    const amount = parseFloat(document.getElementById('expense-amount-input').value);
    const type = document.getElementById('expense-type-val').value || 'expense';
    const category = document.getElementById('expense-category-input').value;
    const date = document.getElementById('expense-date-input').value;

    if (!desc || isNaN(amount) || amount <= 0 || !date) {
      showToast('Please specify valid transaction details and amount.', 'danger');
      return;
    }

    const transaction = {
      id: 'e-' + Date.now(),
      desc,
      amount,
      type,
      category,
      date,
      createdAt: new Date().toISOString()
    };

    State.expenses.unshift(transaction);
    State.save(APP_STORAGE_KEYS.EXPENSES, State.expenses);

    closeExpenseModal();
    Sound.playSuccess();
    showToast(`Logged ${type.toUpperCase()}: $${amount.toFixed(2)} (${desc})`, 'success');
    renderExpenses();
    renderDashboard();
  }

  function deleteExpense(id) {
    State.expenses = State.expenses.filter(e => e.id !== id);
    State.save(APP_STORAGE_KEYS.EXPENSES, State.expenses);
    Sound.playClick();
    showToast('Transaction removed from ledger.', 'info');
    renderExpenses();
    renderDashboard();
  }

  // --------------------------------------------------------------------------
  // 14. SECTION 5: FOCUS MODE (POMODORO)
  // --------------------------------------------------------------------------
  const FocusTimer = {
    mode: 'work', // 'work', 'short', 'long'
    durations: {
      work: 25 * 60,
      short: 5 * 60,
      long: 15 * 60
    },
    timeLeft: 25 * 60,
    totalDuration: 25 * 60,
    intervalId: null,
    isRunning: false,
    startTime: 0,
    expectedEndTime: 0,

    init() {
      this.bindEvents();
      this.updateDisplay();
    },

    bindEvents() {
      // Mode tabs
      document.querySelectorAll('.focus-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          const mode = tab.dataset.focusMode;
          this.setMode(mode);
          Sound.playClick();
        });
      });

      // Controls
      const playBtn = document.getElementById('timer-play-btn');
      if (playBtn) playBtn.addEventListener('click', () => this.toggle());

      const resetBtn = document.getElementById('timer-reset-btn');
      if (resetBtn) resetBtn.addEventListener('click', () => this.reset());

      const skipBtn = document.getElementById('timer-skip-btn');
      if (skipBtn) skipBtn.addEventListener('click', () => this.skip());

      // Task select
      const taskSelect = document.getElementById('focus-task-select');
      if (taskSelect) {
        taskSelect.addEventListener('change', (e) => {
          const title = e.target.selectedOptions[0]?.text || 'Autonomous Directive';
          const targetTaskElem = document.getElementById('timer-current-task');
          if (targetTaskElem) {
            targetTaskElem.textContent = e.target.value ? `Target: ${title}` : 'Target: Autonomous Directive';
          }
        });
      }

      // Synth controls
      const synthToggle = document.getElementById('synth-toggle-btn');
      if (synthToggle) {
        synthToggle.addEventListener('click', () => {
          if (Sound.ambientPlaying) {
            Sound.stopAmbient();
            synthToggle.textContent = 'Enable Sound';
            synthToggle.classList.remove('btn-accent');
            synthToggle.classList.add('btn-outline');
          } else {
            const activePreset = document.querySelector('.synth-preset-btn.active')?.dataset.preset || 'space';
            const vol = parseFloat(document.getElementById('synth-volume')?.value || '0.3');
            Sound.startAmbient(activePreset, vol);
            synthToggle.textContent = 'Stop Sound';
            synthToggle.classList.remove('btn-outline');
            synthToggle.classList.add('btn-accent');
          }
        });
      }

      document.querySelectorAll('.synth-preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.synth-preset-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          if (Sound.ambientPlaying) {
            const vol = parseFloat(document.getElementById('synth-volume')?.value || '0.3');
            Sound.startAmbient(btn.dataset.preset, vol);
          }
        });
      });

      const volSlider = document.getElementById('synth-volume');
      if (volSlider) {
        volSlider.addEventListener('input', (e) => {
          Sound.setAmbientVolume(parseFloat(e.target.value));
        });
      }
    },

    setMode(mode) {
      this.pause();
      this.mode = mode;
      this.totalDuration = this.durations[mode];
      this.timeLeft = this.totalDuration;

      document.querySelectorAll('.focus-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.focusMode === mode);
      });

      const badge = document.getElementById('timer-mode-badge');
      if (badge) {
        if (mode === 'work') badge.textContent = 'FOCUS SESSION';
        else if (mode === 'short') badge.textContent = 'SHORT BREAK';
        else badge.textContent = 'LONG BREAK';
      }

      this.updateDisplay();
    },

    toggle() {
      if (this.isRunning) this.pause();
      else this.start();
    },

    start() {
      if (this.isRunning) return;
      this.isRunning = true;
      this.expectedEndTime = Date.now() + this.timeLeft * 1000;

      const playIcon = document.getElementById('timer-play-icon');
      const pauseIcon = document.getElementById('timer-pause-icon');
      const label = document.getElementById('timer-play-label');

      if (playIcon) playIcon.classList.add('hidden');
      if (pauseIcon) pauseIcon.classList.remove('hidden');
      if (label) label.textContent = 'Pause';

      Sound.playClick();

      this.intervalId = setInterval(() => {
        const remaining = Math.max(0, Math.round((this.expectedEndTime - Date.now()) / 1000));
        this.timeLeft = remaining;
        this.updateDisplay();

        if (this.timeLeft <= 0) {
          this.complete();
        }
      }, 500);
    },

    pause() {
      if (!this.isRunning) return;
      this.isRunning = false;
      clearInterval(this.intervalId);

      const playIcon = document.getElementById('timer-play-icon');
      const pauseIcon = document.getElementById('timer-pause-icon');
      const label = document.getElementById('timer-play-label');

      if (playIcon) playIcon.classList.remove('hidden');
      if (pauseIcon) pauseIcon.classList.add('hidden');
      if (label) label.textContent = 'Resume';

      Sound.playClick();
    },

    reset() {
      this.pause();
      this.timeLeft = this.totalDuration;
      const label = document.getElementById('timer-play-label');
      if (label) label.textContent = 'Start Focus';
      this.updateDisplay();
      Sound.playClick();
    },

    skip() {
      this.pause();
      if (this.mode === 'work') this.setMode('short');
      else this.setMode('work');
      Sound.playClick();
    },

    complete() {
      this.pause();
      Sound.playAlarm();

      if (this.mode === 'work') {
        State.focus.completedSessions = (State.focus.completedSessions || 0) + 1;
        State.focus.totalMinutesToday = (State.focus.totalMinutesToday || 0) + Math.round(this.totalDuration / 60);
        State.save(APP_STORAGE_KEYS.FOCUS, State.focus);

        showToast('Quantum Focus Cycle accomplished! Initiating short break.', 'success', 5000);
        this.setMode('short');
      } else {
        showToast('Break interval complete! Ready to engage focus directives.', 'info', 5000);
        this.setMode('work');
      }

      this.updateCyclePods();
      renderDashboard();
    },

    updateDisplay() {
      const mins = Math.floor(this.timeLeft / 60);
      const secs = this.timeLeft % 60;

      const minElem = document.getElementById('timer-minutes');
      const secElem = document.getElementById('timer-seconds');
      if (minElem) minElem.textContent = String(mins).padStart(2, '0');
      if (secElem) secElem.textContent = String(secs).padStart(2, '0');

      // Animated SVG stroke
      const circle = document.getElementById('timer-dial-progress');
      if (circle) {
        const circumference = 879.64; // 2 * PI * 140
        const progress = this.timeLeft / this.totalDuration;
        const offset = circumference * (1 - progress);
        circle.style.strokeDashoffset = offset;
      }
    },

    updateCyclePods() {
      const podsContainer = document.getElementById('focus-cycle-pods');
      const countText = document.getElementById('focus-completed-count');
      if (!podsContainer) return;

      const cycles = State.focus.completedSessions || 0;
      const pods = podsContainer.querySelectorAll('.cycle-pod');
      pods.forEach((pod, idx) => {
        pod.classList.toggle('filled', idx < (cycles % 4 || (cycles > 0 ? 4 : 0)));
      });

      if (countText) {
        countText.textContent = `${cycles} Sessions (${State.focus.totalMinutesToday}m)`;
      }
    }
  };

  function populateFocusTaskOptions() {
    const select = document.getElementById('focus-task-select');
    if (!select) return;
    const pending = State.tasks.filter(t => !t.completed);
    const curVal = select.value;

    select.innerHTML = '<option value="">-- No specific task linked --</option>';
    pending.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = `[${t.priority.toUpperCase()}] ${t.title}`;
      if (t.id === curVal) opt.selected = true;
      select.appendChild(opt);
    });
  }

  // --------------------------------------------------------------------------
  // 15. SECTION 6: CALENDAR
  // --------------------------------------------------------------------------
  let calendarDate = new Date();
  let selectedDateStr = new Date().toISOString().split('T')[0];

  function setupCalendar() {
    const prevBtn = document.getElementById('cal-prev-month-btn');
    const nextBtn = document.getElementById('cal-next-month-btn');
    const todayBtn = document.getElementById('cal-today-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        calendarDate.setMonth(calendarDate.getMonth() - 1);
        renderCalendar();
        Sound.playClick();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        calendarDate.setMonth(calendarDate.getMonth() + 1);
        renderCalendar();
        Sound.playClick();
      });
    }

    if (todayBtn) {
      todayBtn.addEventListener('click', () => {
        calendarDate = new Date();
        selectedDateStr = new Date().toISOString().split('T')[0];
        renderCalendar();
        Sound.playClick();
      });
    }

    // Modal triggers
    const addBtn = document.getElementById('open-event-modal-btn');
    if (addBtn) addBtn.addEventListener('click', () => openEventModal());

    const eventForm = document.getElementById('event-form');
    if (eventForm) {
      eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveEventFromModal();
      });
    }

    const cancelBtn = document.getElementById('event-modal-cancel');
    const closeBtn = document.getElementById('event-modal-close');
    if (cancelBtn) cancelBtn.addEventListener('click', () => closeEventModal());
    if (closeBtn) closeBtn.addEventListener('click', () => closeEventModal());
  }

  function renderCalendar() {
    const monthDisplay = document.getElementById('cal-current-month-display');
    const cellsContainer = document.getElementById('cal-cells-container');
    if (!cellsContainer) return;

    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    if (monthDisplay) {
      monthDisplay.textContent = `${monthNames[month]} ${year}`;
    }

    // First day of month & total days
    const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sunday
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    const todayStr = new Date().toISOString().split('T')[0];

    cellsContainer.innerHTML = '';

    // Previous month filler cells
    for (let i = firstDayIndex; i > 0; i--) {
      const dayNum = prevLastDate - i + 1;
      const cell = document.createElement('div');
      cell.className = 'cal-day-cell other-month';
      cell.innerHTML = `<span class="day-number">${dayNum}</span>`;
      cellsContainer.appendChild(cell);
    }

    // Current month cells
    for (let day = 1; day <= lastDate; day++) {
      const cell = document.createElement('div');
      const curDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isToday = curDateStr === todayStr;
      const isSelected = curDateStr === selectedDateStr;

      cell.className = `cal-day-cell ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`;
      cell.dataset.date = curDateStr;

      // Event dots for this day
      const dayEvents = State.events.filter(e => e.date === curDateStr);
      let dotsHtml = '';
      if (dayEvents.length > 0) {
        dotsHtml = '<div class="day-event-dots">' + 
          dayEvents.map(e => `<span class="cal-event-dot ${e.badgeColor || 'cyan'}"></span>`).join('') +
          '</div>';
      }

      cell.innerHTML = `
        <span class="day-number">${day}</span>
        ${dotsHtml}
      `;

      cell.addEventListener('click', () => {
        selectedDateStr = curDateStr;
        document.querySelectorAll('.cal-day-cell').forEach(c => c.classList.remove('selected'));
        cell.classList.add('selected');
        renderSelectedDateEvents();
        Sound.playClick();
      });

      cellsContainer.appendChild(cell);
    }

    // Next month filler cells to complete grid (up to 35 or 42)
    const totalCells = firstDayIndex + lastDate;
    const remaining = (totalCells > 35 ? 42 : 35) - totalCells;
    for (let j = 1; j <= remaining; j++) {
      const cell = document.createElement('div');
      cell.className = 'cal-day-cell other-month';
      cell.innerHTML = `<span class="day-number">${j}</span>`;
      cellsContainer.appendChild(cell);
    }

    renderSelectedDateEvents();
    renderUpcomingAgenda();
    updateSidebarBadges();
  }

  function renderSelectedDateEvents() {
    const listElem = document.getElementById('cal-day-events-list');
    const titleElem = document.getElementById('cal-selected-date-title');
    if (!listElem) return;

    if (titleElem) {
      titleElem.textContent = `Schedule: ${selectedDateStr}`;
    }

    const events = State.events.filter(e => e.date === selectedDateStr);

    if (events.length === 0) {
      listElem.innerHTML = `
        <div class="empty-state-card" style="padding: 18px;">
          <p>No mission events scheduled for this date.</p>
          <button class="btn btn-secondary btn-xs" style="margin-top: 8px;" onclick="window.Orbit.openEventModal('${selectedDateStr}')">+ Schedule Event</button>
        </div>
      `;
      return;
    }

    listElem.innerHTML = events.map(ev => `
      <div class="cal-event-item" style="border-left-color: var(--accent-${ev.badgeColor || 'primary'});">
        <div class="event-item-info">
          <span class="event-item-title">${escapeHtml(ev.title)}</span>
          <span class="event-item-time">${ev.time ? ev.time + ' &bull; ' : ''}${escapeHtml(ev.category)}</span>
        </div>
        <div class="task-item-actions">
          <button class="task-action-btn edit" data-event-id="${ev.id}" title="Edit Event">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="task-action-btn delete" data-event-id="${ev.id}" title="Delete Event">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </div>
    `).join('');

    listElem.querySelectorAll('.task-action-btn.edit').forEach(btn => {
      btn.addEventListener('click', () => openEventModal(null, btn.dataset.eventId));
    });

    listElem.querySelectorAll('.task-action-btn.delete').forEach(btn => {
      btn.addEventListener('click', () => deleteEvent(btn.dataset.eventId));
    });
  }

  function renderUpcomingAgenda() {
    const agendaElem = document.getElementById('cal-upcoming-agenda-list');
    if (!agendaElem) return;

    const todayStr = new Date().toISOString().split('T')[0];
    const upcoming = State.events.filter(e => e.date >= todayStr).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 5);

    if (upcoming.length === 0) {
      agendaElem.innerHTML = `<div class="empty-state-card" style="padding: 16px;"><p>No upcoming events on radar.</p></div>`;
      return;
    }

    agendaElem.innerHTML = upcoming.map(ev => `
      <div class="cal-event-item">
        <div class="event-item-info">
          <span class="event-item-title">${escapeHtml(ev.title)}</span>
          <span class="event-item-time">${ev.date} ${ev.time ? 'at ' + ev.time : ''}</span>
        </div>
        <span class="badge-cat">${ev.category}</span>
      </div>
    `).join('');
  }

  function openEventModal(presetDate = null, eventId = null) {
    const modal = document.getElementById('event-modal');
    const titleElem = document.getElementById('event-modal-title');
    const idInput = document.getElementById('event-id-input');
    const titleInput = document.getElementById('event-title-input');
    const dateInput = document.getElementById('event-date-input');
    const timeInput = document.getElementById('event-time-input');
    const catSelect = document.getElementById('event-category-select');
    const badgeSelect = document.getElementById('event-badge-color');
    const descInput = document.getElementById('event-desc-input');

    if (!modal) return;

    if (eventId) {
      const ev = State.events.find(x => x.id === eventId);
      if (ev) {
        titleElem.textContent = 'Edit Mission Event';
        idInput.value = ev.id;
        titleInput.value = ev.title;
        dateInput.value = ev.date;
        timeInput.value = ev.time || '10:00';
        catSelect.value = ev.category || 'Mission';
        badgeSelect.value = ev.badgeColor || 'cyan';
        descInput.value = ev.desc || '';
      }
    } else {
      titleElem.textContent = 'Schedule Mission Event';
      idInput.value = '';
      titleInput.value = '';
      dateInput.value = presetDate || selectedDateStr || new Date().toISOString().split('T')[0];
      timeInput.value = '10:00';
      catSelect.value = 'Mission';
      badgeSelect.value = 'cyan';
      descInput.value = '';
    }

    modal.classList.remove('hidden');
    Sound.playClick();
    setTimeout(() => titleInput.focus(), 50);
  }

  function closeEventModal() {
    const modal = document.getElementById('event-modal');
    if (modal) modal.classList.add('hidden');
  }

  function saveEventFromModal() {
    const id = document.getElementById('event-id-input').value;
    const title = document.getElementById('event-title-input').value.trim();
    const date = document.getElementById('event-date-input').value;
    const time = document.getElementById('event-time-input').value;
    const category = document.getElementById('event-category-select').value;
    const badgeColor = document.getElementById('event-badge-color').value;
    const desc = document.getElementById('event-desc-input').value.trim();

    if (!title || !date) {
      showToast('Event title and date are required.', 'danger');
      return;
    }

    if (id) {
      const ev = State.events.find(e => e.id === id);
      if (ev) {
        ev.title = title;
        ev.date = date;
        ev.time = time;
        ev.category = category;
        ev.badgeColor = badgeColor;
        ev.desc = desc;
        showToast('Event updated successfully.', 'success');
      }
    } else {
      const newEv = {
        id: 'v-' + Date.now(),
        title,
        date,
        time,
        category,
        badgeColor,
        desc,
        createdAt: new Date().toISOString()
      };
      State.events.push(newEv);
      showToast('Event scheduled on orbital calendar.', 'success');
    }

    State.save(APP_STORAGE_KEYS.EVENTS, State.events);
    closeEventModal();
    renderCalendar();
    renderDashboard();
  }

  function deleteEvent(id) {
    State.events = State.events.filter(e => e.id !== id);
    State.save(APP_STORAGE_KEYS.EVENTS, State.events);
    Sound.playClick();
    showToast('Event removed from schedule.', 'info');
    renderCalendar();
    renderDashboard();
  }

  // --------------------------------------------------------------------------
  // 16. SECTION 7: QUANTUM SCIENTIFIC CALCULATOR (STRICT: NO eval())
  // --------------------------------------------------------------------------
  /**
   * Robust Tokenizer + Shunting-Yard Algorithm + RPN Evaluator
   * Zero eval(), zero security risk, supports operator precedence, parentheses,
   * sin/cos/tan/sqrt/log/ln/pow, constants PI & E.
   */
  const QuantumCalc = {
    expression: '',
    lastAnswer: '0',
    history: [],

    init() {
      this.history = State.calcHistory || [];
      this.bindKeypad();
      this.bindKeyboard();
      this.renderDisplay();
      this.renderHistory();

      const clearHistBtn = document.getElementById('clear-calc-history-btn');
      if (clearHistBtn) {
        clearHistBtn.addEventListener('click', () => {
          this.history = [];
          State.calcHistory = [];
          State.save(APP_STORAGE_KEYS.CALC_HISTORY, []);
          this.renderHistory();
          Sound.playClick();
          showToast('Calculation log purged.', 'info');
        });
      }
    },

    bindKeypad() {
      document.querySelectorAll('.calc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const val = btn.dataset.calc;
          this.handleInput(val);
        });
      });
    },

    bindKeyboard() {
      window.addEventListener('keydown', (e) => {
        if (currentSection !== 'calculator') return;
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        const key = e.key;
        if ((key >= '0' && key <= '9') || key === '.') {
          this.handleInput(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
          this.handleInput(key);
        } else if (key === '(' || key === ')') {
          this.handleInput(key);
        } else if (key === 'Enter' || key === '=') {
          e.preventDefault();
          this.handleInput('=');
        } else if (key === 'Backspace') {
          e.preventDefault();
          this.handleInput('delete');
        } else if (key === 'Escape' || key.toLowerCase() === 'c') {
          this.handleInput('clear');
        }
      });
    },

    handleInput(cmd) {
      Sound.playClick();

      if (cmd === 'clear') {
        this.expression = '';
        this.renderDisplay('0', '0');
      } else if (cmd === 'delete') {
        this.expression = this.expression.slice(0, -1);
        this.renderDisplay(this.expression || '0', '0');
      } else if (cmd === '=') {
        this.calculate();
      } else if (cmd === 'ans') {
        this.expression += this.lastAnswer;
        this.renderDisplay(this.expression);
      } else if (cmd === 'pm') {
        // Toggle sign
        if (this.expression.startsWith('-(') && this.expression.endsWith(')')) {
          this.expression = this.expression.slice(2, -1);
        } else {
          this.expression = `-(${this.expression || '0'})`;
        }
        this.renderDisplay(this.expression);
      } else if (cmd === 'sq') {
        this.expression += '^2';
        this.renderDisplay(this.expression);
      } else if (cmd === 'inv') {
        this.expression = `1/(${this.expression || '1'})`;
        this.renderDisplay(this.expression);
      } else if (['sin', 'cos', 'tan', 'sqrt', 'log', 'ln'].includes(cmd)) {
        this.expression += `${cmd}(`;
        this.renderDisplay(this.expression);
      } else if (cmd === 'pi') {
        this.expression += 'pi';
        this.renderDisplay(this.expression);
      } else if (cmd === 'e') {
        this.expression += 'e';
        this.renderDisplay(this.expression);
      } else if (cmd === 'pow') {
        this.expression += '^';
        this.renderDisplay(this.expression);
      } else {
        this.expression += cmd;
        this.renderDisplay(this.expression);
      }
    },

    calculate() {
      if (!this.expression.trim()) return;

      try {
        const result = this.safeEvaluate(this.expression);
        const formattedResult = Number.isInteger(result) ? String(result) : parseFloat(result.toFixed(8)).toString();

        this.renderDisplay(this.expression, formattedResult);
        this.lastAnswer = formattedResult;

        // Log to history
        this.history.unshift({
          expression: this.expression,
          result: formattedResult,
          timestamp: Date.now()
        });

        if (this.history.length > 25) this.history.pop();
        State.calcHistory = this.history;
        State.save(APP_STORAGE_KEYS.CALC_HISTORY, this.history);
        this.renderHistory();

        // Chain calculation with result
        this.expression = formattedResult;
      } catch (err) {
        console.warn('Calc error:', err);
        this.renderDisplay(this.expression, 'Error');
        Sound.playWarning();
      }
    },

    safeEvaluate(expr) {
      const tokens = this.tokenize(expr);
      const rpn = this.shuntingYard(tokens);
      return this.evaluateRPN(rpn);
    },

    tokenize(str) {
      const tokens = [];
      let i = 0;
      const s = str.replace(/\s+/g, '');

      while (i < s.length) {
        const char = s[i];

        // Numbers & Decimals
        if (/[0-9.]/.test(char)) {
          let numStr = '';
          while (i < s.length && /[0-9.]/.test(s[i])) {
            numStr += s[i];
            i++;
          }
          tokens.push({ type: 'number', value: parseFloat(numStr) });
          continue;
        }

        // Identifier words (sin, cos, tan, sqrt, log, ln, pi, e)
        if (/[a-zA-Z]/.test(char)) {
          let word = '';
          while (i < s.length && /[a-zA-Z]/.test(s[i])) {
            word += s[i];
            i++;
          }
          word = word.toLowerCase();
          if (word === 'pi') {
            tokens.push({ type: 'number', value: Math.PI });
          } else if (word === 'e') {
            tokens.push({ type: 'number', value: Math.E });
          } else if (['sin', 'cos', 'tan', 'sqrt', 'log', 'ln', 'abs'].includes(word)) {
            tokens.push({ type: 'function', value: word });
          } else {
            throw new Error(`Unknown identifier: ${word}`);
          }
          continue;
        }

        // Operators & Parentheses
        if ('+-*/%^()'.includes(char)) {
          // Unary minus detection: if '-' is preceded by nothing or by an operator or '('
          if (char === '-') {
            const prev = tokens[tokens.length - 1];
            if (!prev || prev.type === 'operator' || (prev.type === 'paren' && prev.value === '(')) {
              tokens.push({ type: 'operator', value: 'neg', precedence: 4, assoc: 'right' });
              i++;
              continue;
            }
          }

          if (char === '(' || char === ')') {
            tokens.push({ type: 'paren', value: char });
          } else {
            let prec = 1;
            let assoc = 'left';
            if (char === '+' || char === '-') prec = 1;
            else if (char === '*' || char === '/' || char === '%') prec = 2;
            else if (char === '^') { prec = 3; assoc = 'right'; }
            tokens.push({ type: 'operator', value: char, precedence: prec, assoc });
          }
          i++;
          continue;
        }

        throw new Error(`Invalid token at character: ${char}`);
      }

      return tokens;
    },

    shuntingYard(tokens) {
      const outputQueue = [];
      const opStack = [];

      tokens.forEach(token => {
        if (token.type === 'number') {
          outputQueue.push(token);
        } else if (token.type === 'function') {
          opStack.push(token);
        } else if (token.type === 'operator') {
          while (opStack.length > 0) {
            const top = opStack[opStack.length - 1];
            if (top.type === 'operator') {
              if ((token.assoc === 'left' && token.precedence <= top.precedence) ||
                  (token.assoc === 'right' && token.precedence < top.precedence)) {
                outputQueue.push(opStack.pop());
                continue;
              }
            } else if (top.type === 'function') {
              outputQueue.push(opStack.pop());
              continue;
            }
            break;
          }
          opStack.push(token);
        } else if (token.type === 'paren' && token.value === '(') {
          opStack.push(token);
        } else if (token.type === 'paren' && token.value === ')') {
          let matched = false;
          while (opStack.length > 0) {
            const top = opStack.pop();
            if (top.type === 'paren' && top.value === '(') {
              matched = true;
              break;
            } else {
              outputQueue.push(top);
            }
          }
          if (!matched) throw new Error('Mismatched parentheses');
          if (opStack.length > 0 && opStack[opStack.length - 1].type === 'function') {
            outputQueue.push(opStack.pop());
          }
        }
      });

      while (opStack.length > 0) {
        const top = opStack.pop();
        if (top.type === 'paren') throw new Error('Mismatched parentheses');
        outputQueue.push(top);
      }

      return outputQueue;
    },

    evaluateRPN(rpn) {
      const stack = [];

      rpn.forEach(token => {
        if (token.type === 'number') {
          stack.push(token.value);
        } else if (token.type === 'operator') {
          if (token.value === 'neg') {
            if (stack.length < 1) throw new Error('Syntax error');
            stack.push(-stack.pop());
          } else {
            if (stack.length < 2) throw new Error('Syntax error');
            const b = stack.pop();
            const a = stack.pop();

            if (token.value === '+') stack.push(a + b);
            else if (token.value === '-') stack.push(a - b);
            else if (token.value === '*') stack.push(a * b);
            else if (token.value === '/') {
              if (b === 0) throw new Error('Division by zero');
              stack.push(a / b);
            } else if (token.value === '%') stack.push(a % b);
            else if (token.value === '^') stack.push(Math.pow(a, b));
          }
        } else if (token.type === 'function') {
          if (stack.length < 1) throw new Error('Syntax error');
          const arg = stack.pop();

          if (token.value === 'sin') {
            // Converts degrees to radians for intuitive sci-fi usage
            stack.push(Math.sin((arg * Math.PI) / 180));
          } else if (token.value === 'cos') {
            stack.push(Math.cos((arg * Math.PI) / 180));
          } else if (token.value === 'tan') {
            stack.push(Math.tan((arg * Math.PI) / 180));
          } else if (token.value === 'sqrt') {
            if (arg < 0) throw new Error('Negative square root');
            stack.push(Math.sqrt(arg));
          } else if (token.value === 'log') {
            if (arg <= 0) throw new Error('Log domain error');
            stack.push(Math.log10(arg));
          } else if (token.value === 'ln') {
            if (arg <= 0) throw new Error('Ln domain error');
            stack.push(Math.log(arg));
          } else if (token.value === 'abs') {
            stack.push(Math.abs(arg));
          }
        }
      });

      if (stack.length !== 1) throw new Error('Syntax error');
      return stack[0];
    },

    renderDisplay(expr = null, res = null) {
      const exprElem = document.getElementById('calc-expression-display');
      const resElem = document.getElementById('calc-result-display');
      if (exprElem) exprElem.textContent = expr !== null ? expr : (this.expression || '0');
      if (resElem && res !== null) resElem.textContent = res;
    },

    renderHistory() {
      const container = document.getElementById('calc-history-container');
      if (!container) return;

      if (this.history.length === 0) {
        container.innerHTML = `<div class="empty-state-card"><p>No computations recorded yet.</p></div>`;
        return;
      }

      container.innerHTML = this.history.map(item => `
        <div class="calc-history-item" data-expr="${escapeHtml(item.expression)}" data-res="${escapeHtml(item.result)}">
          <div class="calc-history-expr">${escapeHtml(item.expression)} =</div>
          <div class="calc-history-val">${escapeHtml(item.result)}</div>
        </div>
      `).join('');

      container.querySelectorAll('.calc-history-item').forEach(el => {
        el.addEventListener('click', () => {
          this.expression = el.dataset.res;
          this.renderDisplay(this.expression, el.dataset.res);
          Sound.playClick();
        });
      });
    }
  };

  // --------------------------------------------------------------------------
  // 17. SECTION 8: SETTINGS & BACKUP ENGINE
  // --------------------------------------------------------------------------
  function setupSettings() {
    // Theme switches
    const darkBtn = document.getElementById('theme-dark-btn');
    const lightBtn = document.getElementById('theme-light-btn');
    if (darkBtn && lightBtn) {
      darkBtn.addEventListener('click', () => applyTheme('dark'));
      lightBtn.addEventListener('click', () => applyTheme('light'));
    }

    // Accent picker
    document.querySelectorAll('#accent-color-picker .accent-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const color = dot.dataset.accentColor;
        applyAccent(color);
      });
    });

    // Particle switch
    const partSwitch = document.getElementById('setting-particles-toggle');
    if (partSwitch) {
      partSwitch.checked = State.settings.particlesEnabled;
      partSwitch.addEventListener('change', (e) => {
        State.settings.particlesEnabled = e.target.checked;
        State.save(APP_STORAGE_KEYS.SETTINGS, State.settings);
        if (particleSys) particleSys.setRunning(e.target.checked);
        showToast(`Particles animation ${e.target.checked ? 'ENABLED' : 'PAUSED'}`, 'info');
      });
    }

    // Profile inputs
    const nameInput = document.getElementById('setting-user-name');
    const titleInput = document.getElementById('setting-user-title');
    const saveProfileBtn = document.getElementById('save-settings-profile-btn');

    if (nameInput) nameInput.value = State.settings.userName;
    if (titleInput) titleInput.value = State.settings.userTitle;

    if (saveProfileBtn) {
      saveProfileBtn.addEventListener('click', () => {
        const name = nameInput.value.trim() || 'Subhranil';
        const title = titleInput.value.trim() || 'COMMANDER';
        State.settings.userName = name;
        State.settings.userTitle = title;
        State.save(APP_STORAGE_KEYS.SETTINGS, State.settings);

        // Update top bar profile
        const topUser = document.getElementById('top-user-name');
        const topTitle = document.getElementById('top-user-title');
        if (topUser) topUser.textContent = name;
        if (topTitle) topTitle.textContent = title;

        renderDashboard();
        Sound.playSuccess();
        showToast('Commander credentials updated.', 'success');
      });
    }

    // Clock Format Buttons
    const clock12 = document.getElementById('clock-format-12');
    const clock24 = document.getElementById('clock-format-24');
    if (clock12 && clock24) {
      clock12.addEventListener('click', () => setClockFormat('12'));
      clock24.addEventListener('click', () => setClockFormat('24'));
    }

    // Sound toggle in settings
    const soundToggle = document.getElementById('setting-sound-toggle');
    if (soundToggle) {
      soundToggle.checked = State.settings.soundEnabled;
      soundToggle.addEventListener('change', (e) => {
        State.settings.soundEnabled = e.target.checked;
        State.save(APP_STORAGE_KEYS.SETTINGS, State.settings);
        updateSoundUI();
        showToast(`Audio FX ${e.target.checked ? 'ONLINE' : 'MUTED'}`, 'info');
      });
    }

    // Export / Import
    const exportBtn = document.getElementById('export-data-btn');
    if (exportBtn) exportBtn.addEventListener('click', () => exportData());

    const importInput = document.getElementById('import-data-file');
    if (importInput) importInput.addEventListener('change', (e) => importData(e));

    // Sample data reload
    const loadSampleBtn = document.getElementById('load-sample-data-btn');
    if (loadSampleBtn) {
      loadSampleBtn.addEventListener('click', () => {
        State.reloadSeeds();
        renderAllViews();
        Sound.playSuccess();
        showToast('Sample mission data reloaded successfully.', 'success');
      });
    }

    // Purge confirmation modal
    const clearBtn = document.getElementById('clear-all-data-btn');
    const purgeModal = document.getElementById('purge-modal');
    const purgeInput = document.getElementById('purge-confirmation-input');
    const purgeConfirmBtn = document.getElementById('purge-confirm-btn');
    const purgeCancel = document.getElementById('purge-modal-cancel');
    const purgeClose = document.getElementById('purge-modal-close');

    if (clearBtn && purgeModal) {
      clearBtn.addEventListener('click', () => {
        purgeInput.value = '';
        purgeConfirmBtn.disabled = true;
        purgeModal.classList.remove('hidden');
        Sound.playWarning();
        setTimeout(() => purgeInput.focus(), 50);
      });
    }

    if (purgeInput && purgeConfirmBtn) {
      purgeInput.addEventListener('input', () => {
        purgeConfirmBtn.disabled = purgeInput.value.trim().toUpperCase() !== 'PURGE';
      });
    }

    if (purgeConfirmBtn) {
      purgeConfirmBtn.addEventListener('click', () => {
        State.resetAllData();
        purgeModal.classList.add('hidden');
        renderAllViews();
        Sound.playAlarm();
        showToast('All ORBIT local storage matrices purged.', 'danger');
      });
    }

    if (purgeCancel) purgeCancel.addEventListener('click', () => purgeModal.classList.add('hidden'));
    if (purgeClose) purgeClose.addEventListener('click', () => purgeModal.classList.add('hidden'));

    updateStorageStats();
  }

  function applyTheme(theme) {
    document.body.dataset.theme = theme;
    State.settings.theme = theme;
    State.save(APP_STORAGE_KEYS.SETTINGS, State.settings);

    document.getElementById('theme-dark-btn')?.classList.toggle('active', theme === 'dark');
    document.getElementById('theme-light-btn')?.classList.toggle('active', theme === 'light');

    Sound.playClick();
    showToast(`Visual matrix switched to ${theme.toUpperCase()} MODE`, 'info');
  }

  function toggleTheme() {
    const cur = State.settings.theme || 'dark';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  }

  function applyAccent(color) {
    document.body.dataset.accent = color;
    State.settings.accent = color;
    State.save(APP_STORAGE_KEYS.SETTINGS, State.settings);

    document.querySelectorAll('#accent-color-picker .accent-dot').forEach(dot => {
      dot.classList.toggle('active', dot.dataset.accentColor === color);
    });

    Sound.playClick();
    showToast(`Accent luminescence updated to ${color.toUpperCase()}`, 'info');
  }

  function setClockFormat(format) {
    State.settings.clockFormat = format;
    State.save(APP_STORAGE_KEYS.SETTINGS, State.settings);
    document.getElementById('clock-format-12')?.classList.toggle('active', format === '12');
    document.getElementById('clock-format-24')?.classList.toggle('active', format === '24');
    updateClock();
    Sound.playClick();
  }

  function updateStorageStats() {
    const countElem = document.getElementById('storage-objects-count');
    if (!countElem) return;

    let totalObjects = State.tasks.length + State.notes.length + State.expenses.length + State.events.length;
    countElem.textContent = `${totalObjects} Records`;
  }

  function exportData() {
    const backup = {
      orbit_version: '3.4.8',
      exported_at: new Date().toISOString(),
      tasks: State.tasks,
      notes: State.notes,
      expenses: State.expenses,
      events: State.events,
      focus: State.focus,
      settings: State.settings
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backup, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `orbit-system-backup-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();

    Sound.playSuccess();
    showToast('System backup archive downloaded successfully.', 'success');
  }

  function importData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.tasks) State.tasks = data.tasks;
        if (data.notes) State.notes = data.notes;
        if (data.expenses) State.expenses = data.expenses;
        if (data.events) State.events = data.events;
        if (data.focus) State.focus = data.focus;
        if (data.settings) State.settings = { ...State.settings, ...data.settings };

        State.save(APP_STORAGE_KEYS.TASKS, State.tasks);
        State.save(APP_STORAGE_KEYS.NOTES, State.notes);
        State.save(APP_STORAGE_KEYS.EXPENSES, State.expenses);
        State.save(APP_STORAGE_KEYS.EVENTS, State.events);
        State.save(APP_STORAGE_KEYS.FOCUS, State.focus);
        State.save(APP_STORAGE_KEYS.SETTINGS, State.settings);

        renderAllViews();
        Sound.playSuccess();
        showToast('System data successfully restored from backup!', 'success');
      } catch (err) {
        console.error('Import error:', err);
        showToast('Corrupted or invalid JSON backup file.', 'danger');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  function renderAllViews() {
    renderDashboard();
    renderTasks();
    renderNotes();
    renderExpenses();
    renderCalendar();
    FocusTimer.updateCyclePods();
    updateStorageStats();
  }

  // --------------------------------------------------------------------------
  // 18. INITIALIZATION & EXPOSURE
  // --------------------------------------------------------------------------
  function initApp() {
    // Apply saved theme and accent
    document.body.dataset.theme = State.settings.theme || 'dark';
    document.body.dataset.accent = State.settings.accent || 'cyan';

    // Update profile in UI
    const topUser = document.getElementById('top-user-name');
    const topTitle = document.getElementById('top-user-title');
    if (topUser) topUser.textContent = State.settings.userName;
    if (topTitle) topTitle.textContent = State.settings.userTitle;

    // Boot sequence
    runBootSequence();

    // Init canvas particles
    particleSys = new ParticleNetwork();

    // Start clock telemetry
    updateClock();
    setInterval(updateClock, 1000);

    // Setup subsystem modules
    setupNavigation();
    setupGlobalShortcuts();
    CommandPalette.init();
    setupTaskManager();
    setupNotesVault();
    setupExpenseTracker();
    FocusTimer.init();
    setupCalendar();
    QuantumCalc.init();
    setupSettings();
    updateSoundUI();

    // Initial render
    renderDashboard();
    renderTasks();
    renderNotes();
    renderExpenses();
    renderCalendar();

    // Shortcuts modal OK button
    const shortcutsOk = document.getElementById('shortcuts-modal-ok');
    const shortcutsClose = document.getElementById('shortcuts-modal-close');
    const shortcutsModal = document.getElementById('shortcuts-modal');
    if (shortcutsOk && shortcutsModal) shortcutsOk.addEventListener('click', () => shortcutsModal.classList.add('hidden'));
    if (shortcutsClose && shortcutsModal) shortcutsClose.addEventListener('click', () => shortcutsModal.classList.add('hidden'));

    console.log('%c ORBIT // PERSONAL COMMAND CENTER ONLINE ', 'background: #00f0ff; color: #030712; font-weight: bold; font-size: 14px; padding: 4px;');
  }

  // Global window handle for inline HTML onclick helpers
  window.Orbit = {
    openTaskModal,
    openNoteModal,
    openExpenseModal,
    openEventModal,
    navigateTo
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
