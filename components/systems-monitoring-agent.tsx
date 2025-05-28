"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Server,
  Database,
  Shield,
  AlertTriangle,
  CheckCircle,
  Settings,
  RefreshCw,
  Bell,
  Activity,
  Zap,
  Lock,
  Globe,
  Cpu,
  Network,
  Eye,
  Download,
  Clock,
  BellRing,
  CheckCheck,
  AlertCircle,
} from "lucide-react"

export function SystemsMonitoringAgent() {
  const [systemStatus, setSystemStatus] = useState("operational")
  const [lastCheck, setLastCheck] = useState(new Date())
  const [autoHealing, setAutoHealing] = useState(true)
  const [autoConfig, setAutoConfig] = useState(true)
  const [notifications, setNotifications] = useState<any[]>([])
  const [configChanges, setConfigChanges] = useState<any[]>([])
  const [isMonitoring, setIsMonitoring] = useState(true)

  // Auto-configuration system
  useEffect(() => {
    if (autoConfig && isMonitoring) {
      const interval = setInterval(() => {
        performAutoConfiguration()
        checkSystemHealth()
      }, 30000) // Check every 30 seconds

      return () => clearInterval(interval)
    }
  }, [autoConfig, isMonitoring])

  const performAutoConfiguration = () => {
    // Simulate auto-configuration checks
    const missingConfigs = envVariables.filter((v) => v.status === "missing")

    missingConfigs.forEach((config) => {
      installEnvironmentVariable(config.name, config.service)
    })

    // Check for configuration drift
    checkConfigurationDrift()
  }

  const installEnvironmentVariable = (varName: string, service: string) => {
    console.log(`Auto-installing environment variable: ${varName}`)

    // Simulate installation
    const change = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      type: "auto-install",
      variable: varName,
      service: service,
      status: "completed",
      message: `Automatically installed ${varName} for ${service}`,
    }

    setConfigChanges((prev) => [change, ...prev.slice(0, 9)])
    sendNotification(
      "success",
      `Auto-installed ${varName}`,
      `Environment variable ${varName} has been automatically configured for ${service}`,
    )

    // Update the variable status
    envVariables.forEach((v) => {
      if (v.name === varName) {
        v.status = "configured"
        v.lastChecked = new Date().toLocaleString()
      }
    })
  }

  const checkConfigurationDrift = () => {
    // Simulate configuration drift detection
    const driftDetected = Math.random() < 0.1 // 10% chance of drift

    if (driftDetected) {
      const change = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        type: "drift-correction",
        variable: "DATABASE_URL",
        service: "Database Connection",
        status: "corrected",
        message: "Configuration drift detected and automatically corrected",
      }

      setConfigChanges((prev) => [change, ...prev.slice(0, 9)])
      sendNotification(
        "warning",
        "Configuration Drift Corrected",
        "Database connection configuration was automatically restored",
      )
    }
  }

  const checkSystemHealth = () => {
    // Simulate system health checks
    const healthIssues = Math.random() < 0.05 // 5% chance of issues

    if (healthIssues) {
      const issue = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        type: "health-check",
        service: "PayPal Integration",
        status: "resolved",
        message: "Connection timeout detected and resolved automatically",
      }

      setConfigChanges((prev) => [issue, ...prev.slice(0, 9)])
      sendNotification("info", "System Issue Resolved", "PayPal integration connection was automatically restored")
    }
  }

  const sendNotification = (type: string, title: string, message: string) => {
    const notification = {
      id: Date.now(),
      type,
      title,
      message,
      timestamp: new Date().toISOString(),
      read: false,
    }

    setNotifications((prev) => [notification, ...prev.slice(0, 19)])

    // In production, this would send actual notifications
    console.log(`Notification [${type.toUpperCase()}]: ${title} - ${message}`)
  }

  const markNotificationRead = (id: number) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const clearAllNotifications = () => {
    setNotifications([])
  }

  // Environment Variables with auto-detection
  const envVariables = [
    {
      name: "NEXT_PUBLIC_PAYPAL_CLIENT_ID",
      status: "configured",
      required: true,
      service: "PayPal Integration",
      lastChecked: new Date().toLocaleString(),
      autoInstall: true,
    },
    {
      name: "PAYPAL_CLIENT_SECRET",
      status: "configured",
      required: true,
      service: "PayPal Integration",
      lastChecked: new Date().toLocaleString(),
      autoInstall: true,
    },
    {
      name: "PAYPAL_WEBHOOK_ID",
      status: "configured",
      required: true,
      service: "PayPal Webhooks",
      lastChecked: new Date().toLocaleString(),
      autoInstall: true,
    },
    {
      name: "DATABASE_URL",
      status: "configured",
      required: true,
      service: "Database Connection",
      lastChecked: new Date().toLocaleString(),
      autoInstall: true,
    },
    {
      name: "NEXTAUTH_SECRET",
      status: "configured",
      required: true,
      service: "Authentication",
      lastChecked: new Date().toLocaleString(),
      autoInstall: true,
    },
    {
      name: "CREDIT_BUREAU_API_KEY",
      status: "configured",
      required: true,
      service: "Credit Bureau APIs",
      lastChecked: new Date().toLocaleString(),
      autoInstall: true,
    },
    {
      name: "OPENAI_API_KEY",
      status: "configured",
      required: true,
      service: "AI Processing",
      lastChecked: new Date().toLocaleString(),
      autoInstall: true,
    },
    {
      name: "STRIPE_SECRET_KEY",
      status: "configured",
      required: false,
      service: "Stripe Integration",
      lastChecked: new Date().toLocaleString(),
      autoInstall: true,
    },
    {
      name: "EMAIL_SERVICE_API_KEY",
      status: "configured",
      required: true,
      service: "Email Notifications",
      lastChecked: new Date().toLocaleString(),
      autoInstall: true,
    },
    {
      name: "REDIS_URL",
      status: "configured",
      required: true,
      service: "Caching Layer",
      lastChecked: new Date().toLocaleString(),
      autoInstall: true,
    },
  ]

  // System Services Monitoring
  const systemServices = [
    {
      name: "Web Application",
      status: "operational",
      uptime: "99.98%",
      responseTime: "145ms",
      lastIncident: "None",
      icon: Globe,
      color: "green",
    },
    {
      name: "Database",
      status: "operational",
      uptime: "99.99%",
      responseTime: "12ms",
      lastIncident: "None",
      icon: Database,
      color: "green",
    },
    {
      name: "PayPal Integration",
      status: "operational",
      uptime: "99.95%",
      responseTime: "230ms",
      lastIncident: "None",
      icon: Shield,
      color: "green",
    },
    {
      name: "Credit Bureau APIs",
      status: "operational",
      uptime: "99.92%",
      responseTime: "890ms",
      lastIncident: "None",
      icon: Network,
      color: "green",
    },
    {
      name: "AI Processing",
      status: "operational",
      uptime: "99.97%",
      responseTime: "1.2s",
      lastIncident: "None",
      icon: Cpu,
      color: "green",
    },
    {
      name: "Email Service",
      status: "operational",
      uptime: "99.94%",
      responseTime: "340ms",
      lastIncident: "None",
      icon: Bell,
      color: "green",
    },
  ]

  // Infrastructure Monitoring
  const infrastructure = [
    {
      metric: "CPU Usage",
      value: 23,
      threshold: 80,
      status: "healthy",
      unit: "%",
    },
    {
      metric: "Memory Usage",
      value: 45,
      threshold: 85,
      status: "healthy",
      unit: "%",
    },
    {
      metric: "Disk Usage",
      value: 67,
      threshold: 90,
      status: "healthy",
      unit: "%",
    },
    {
      metric: "Network I/O",
      value: 34,
      threshold: 95,
      status: "healthy",
      unit: "%",
    },
    {
      metric: "Database Connections",
      value: 12,
      threshold: 100,
      status: "healthy",
      unit: "connections",
    },
    {
      metric: "API Rate Limit",
      value: 156,
      threshold: 1000,
      status: "healthy",
      unit: "req/min",
    },
  ]

  // Security Monitoring
  const securityMetrics = [
    {
      name: "SSL Certificate",
      status: "valid",
      expiresIn: "89 days",
      lastChecked: "2024-12-15 10:30:00",
    },
    {
      name: "Firewall Status",
      status: "active",
      blockedRequests: "1,247",
      lastChecked: "2024-12-15 10:30:00",
    },
    {
      name: "DDoS Protection",
      status: "active",
      mitigatedAttacks: "0",
      lastChecked: "2024-12-15 10:30:00",
    },
    {
      name: "Data Encryption",
      status: "active",
      encryptionLevel: "AES-256",
      lastChecked: "2024-12-15 10:30:00",
    },
  ]

  // Auto-healing Actions
  const autoHealingActions = [
    {
      trigger: "High CPU Usage",
      action: "Scale up instances",
      lastTriggered: "Never",
      status: "armed",
    },
    {
      trigger: "Database Connection Failure",
      action: "Restart connection pool",
      lastTriggered: "Never",
      status: "armed",
    },
    {
      trigger: "API Rate Limit Exceeded",
      action: "Enable request queuing",
      lastTriggered: "Never",
      status: "armed",
    },
    {
      trigger: "Payment Gateway Failure",
      action: "Switch to backup gateway",
      lastTriggered: "Never",
      status: "armed",
    },
  ]

  const handleSystemCheck = () => {
    setLastCheck(new Date())
    performAutoConfiguration()
    sendNotification("info", "System Check Complete", "Comprehensive system check completed successfully")
  }

  const handleInstallVariable = (varName: string) => {
    const variable = envVariables.find((v) => v.name === varName)
    if (variable) {
      installEnvironmentVariable(varName, variable.service)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
      case "healthy":
      case "configured":
      case "valid":
      case "active":
        return "green"
      case "warning":
        return "yellow"
      case "error":
      case "down":
      case "missing":
        return "red"
      default:
        return "gray"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
      case "healthy":
      case "configured":
      case "valid":
      case "active":
        return CheckCircle
      case "warning":
        return AlertTriangle
      case "error":
      case "down":
      case "missing":
        return AlertTriangle
      default:
        return Activity
    }
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return CheckCheck
      case "warning":
        return AlertTriangle
      case "error":
        return AlertCircle
      case "info":
      default:
        return Bell
    }
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Header with Notifications */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Systems Monitoring Agent</h1>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                {autoConfig ? "Auto-Config Active" : "Manual Mode"}
              </Badge>
              {unreadCount > 0 && (
                <Badge className="bg-red-100 text-red-800 border-red-200">{unreadCount} New Alerts</Badge>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch checked={autoConfig} onCheckedChange={setAutoConfig} id="auto-config" />
                <label htmlFor="auto-config" className="text-sm font-medium">
                  Auto-Config
                </label>
              </div>
              <Button variant="outline" size="sm" onClick={handleSystemCheck}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Run Check
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Configure
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">System Status</p>
                  <p className="text-2xl font-bold text-green-600">Operational</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Auto-Config</p>
                  <p className="text-2xl font-bold text-blue-600">{autoConfig ? "Active" : "Disabled"}</p>
                </div>
                <Zap className={`w-8 h-8 ${autoConfig ? "text-blue-600" : "text-gray-400"}`} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Notifications</p>
                  <p className="text-2xl font-bold text-orange-600">{unreadCount}</p>
                </div>
                <BellRing className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Config Changes</p>
                  <p className="text-2xl font-bold text-purple-600">{configChanges.length}</p>
                </div>
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Last Check</p>
                  <p className="text-sm font-bold text-gray-600">{lastCheck.toLocaleTimeString()}</p>
                </div>
                <Clock className="w-8 h-8 text-gray-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="environment">Environment</TabsTrigger>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="auto-healing">Auto-Healing</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="changes">Changes</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
          </TabsList>

          {/* Add new Notifications tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center">
                      <BellRing className="w-5 h-5 mr-2 text-orange-600" />
                      System Notifications
                    </CardTitle>
                    <CardDescription>Real-time alerts and system changes</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={clearAllNotifications}>
                    Clear All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No notifications</p>
                  ) : (
                    notifications.map((notification) => {
                      const NotificationIcon = getNotificationIcon(notification.type)
                      return (
                        <div
                          key={notification.id}
                          className={`flex items-start space-x-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                            notification.read ? "bg-gray-50" : "bg-blue-50 border-blue-200"
                          }`}
                          onClick={() => markNotificationRead(notification.id)}
                        >
                          <NotificationIcon
                            className={`w-5 h-5 mt-0.5 ${
                              notification.type === "success"
                                ? "text-green-600"
                                : notification.type === "warning"
                                  ? "text-yellow-600"
                                  : notification.type === "error"
                                    ? "text-red-600"
                                    : "text-blue-600"
                            }`}
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium text-gray-900">{notification.title}</h4>
                              <span className="text-xs text-gray-500">
                                {new Date(notification.timestamp).toLocaleTimeString()}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                            {!notification.read && (
                              <Badge className="mt-2 bg-blue-100 text-blue-800 border-blue-200 text-xs">New</Badge>
                            )}
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add new Configuration Changes tab */}
          <TabsContent value="changes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-purple-600" />
                  Configuration Changes
                </CardTitle>
                <CardDescription>Automatic configuration updates and modifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {configChanges.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No recent changes</p>
                  ) : (
                    configChanges.map((change) => (
                      <div key={change.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <Badge
                          className={
                            change.type === "auto-install"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : change.type === "drift-correction"
                                ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                : "bg-blue-100 text-blue-800 border-blue-200"
                          }
                        >
                          {change.type}
                        </Badge>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <span className="text-sm font-medium text-gray-900">{change.variable}</span>
                            <span className="text-xs text-gray-500">{new Date(change.timestamp).toLocaleString()}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{change.message}</p>
                          <p className="text-xs text-gray-500 mt-1">Service: {change.service}</p>
                        </div>
                        <Badge
                          className={`${
                            change.status === "completed"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-blue-100 text-blue-800 border-blue-200"
                          }`}
                        >
                          {change.status}
                        </Badge>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enhanced Environment tab with auto-install capabilities */}
          <TabsContent value="environment" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2 text-blue-600" />
                      Environment Variables Management
                    </CardTitle>
                    <CardDescription>Monitor and automatically manage all environment variables</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch checked={autoConfig} onCheckedChange={setAutoConfig} id="auto-config-env" />
                    <label htmlFor="auto-config-env" className="text-sm font-medium">
                      Auto-Install Missing
                    </label>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {envVariables.map((variable, index) => {
                    const StatusIcon = getStatusIcon(variable.status)
                    return (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <StatusIcon className={`w-5 h-5 text-${getStatusColor(variable.status)}-600`} />
                          <div>
                            <h4 className="font-medium text-gray-900">{variable.name}</h4>
                            <p className="text-sm text-gray-600">{variable.service}</p>
                            <p className="text-xs text-gray-500">Last checked: {variable.lastChecked}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {variable.required && (
                            <Badge variant="outline" className="text-xs">
                              Required
                            </Badge>
                          )}
                          {variable.autoInstall && (
                            <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">Auto-Install</Badge>
                          )}
                          <Badge
                            className={`bg-${getStatusColor(variable.status)}-100 text-${getStatusColor(variable.status)}-800 border-${getStatusColor(variable.status)}-200`}
                          >
                            {variable.status}
                          </Badge>
                          {variable.status === "missing" && (
                            <Button size="sm" onClick={() => handleInstallVariable(variable.name)}>
                              <Download className="w-4 h-4 mr-1" />
                              Install Now
                            </Button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <IconComponent className={`w-8 h-8 text-${service.color}-600`} />
                        <Badge
                          className={`bg-${service.color}-100 text-${service.color}-800 border-${service.color}-200`}
                        >
                          {service.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Uptime:</span>
                        <span className="text-sm font-medium">{service.uptime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Response Time:</span>
                        <span className="text-sm font-medium">{service.responseTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Last Incident:</span>
                        <span className="text-sm font-medium">{service.lastIncident}</span>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="infrastructure" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infrastructure.map((metric, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{metric.metric}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">{metric.value}</span>
                        <span className="text-sm text-gray-600">{metric.unit}</span>
                      </div>
                      <Progress value={(metric.value / metric.threshold) * 100} className="h-2" />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Current</span>
                        <span>
                          Threshold: {metric.threshold}
                          {metric.unit}
                        </span>
                      </div>
                      <Badge
                        className={`bg-${getStatusColor(metric.status)}-100 text-${getStatusColor(metric.status)}-800 border-${getStatusColor(metric.status)}-200`}
                      >
                        {metric.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-red-600" />
                      {metric.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Status:</span>
                      <Badge
                        className={`bg-${getStatusColor(metric.status)}-100 text-${getStatusColor(metric.status)}-800 border-${getStatusColor(metric.status)}-200`}
                      >
                        {metric.status}
                      </Badge>
                    </div>
                    {metric.expiresIn && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Expires in:</span>
                        <span className="text-sm font-medium">{metric.expiresIn}</span>
                      </div>
                    )}
                    {metric.blockedRequests && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Blocked requests:</span>
                        <span className="text-sm font-medium">{metric.blockedRequests}</span>
                      </div>
                    )}
                    {metric.mitigatedAttacks && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Mitigated attacks:</span>
                        <span className="text-sm font-medium">{metric.mitigatedAttacks}</span>
                      </div>
                    )}
                    {metric.encryptionLevel && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Encryption:</span>
                        <span className="text-sm font-medium">{metric.encryptionLevel}</span>
                      </div>
                    )}
                    <p className="text-xs text-gray-500">Last checked: {metric.lastChecked}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="auto-healing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                  Auto-Healing Configuration
                </CardTitle>
                <CardDescription>Automated system recovery and maintenance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {autoHealingActions.map((action, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{action.trigger}</h4>
                        <p className="text-sm text-gray-600">{action.action}</p>
                        <p className="text-xs text-gray-500">Last triggered: {action.lastTriggered}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={`bg-${getStatusColor(action.status)}-100 text-${getStatusColor(action.status)}-800 border-${getStatusColor(action.status)}-200`}
                        >
                          {action.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Monitor
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Logs & Events</CardTitle>
                <CardDescription>Real-time system monitoring and event tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {[
                    {
                      timestamp: "2024-12-15 10:30:15",
                      level: "INFO",
                      service: "PayPal Agent",
                      message: "Subscription webhook processed successfully",
                    },
                    {
                      timestamp: "2024-12-15 10:29:45",
                      level: "INFO",
                      service: "Credit Bureau API",
                      message: "Credit report updated for user ID: 12345",
                    },
                    {
                      timestamp: "2024-12-15 10:28:30",
                      level: "INFO",
                      service: "AI Processing",
                      message: "Dispute letter generated and submitted",
                    },
                    {
                      timestamp: "2024-12-15 10:27:12",
                      level: "INFO",
                      service: "Database",
                      message: "Automated backup completed successfully",
                    },
                    {
                      timestamp: "2024-12-15 10:25:00",
                      level: "INFO",
                      service: "Systems Agent",
                      message: "Environment variables validation completed",
                    },
                  ].map((log, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Badge
                        className={
                          log.level === "INFO"
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : log.level === "WARNING"
                              ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                              : "bg-red-100 text-red-800 border-red-200"
                        }
                      >
                        {log.level}
                      </Badge>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <span className="text-sm font-medium text-gray-900">{log.service}</span>
                          <span className="text-xs text-gray-500">{log.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{log.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
