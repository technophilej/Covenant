import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Upload, CheckCircle2, Loader2, FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate file upload
    if (resumeFile) {
      setUploadProgress(30);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUploadProgress(60);
    }
    
    setUploadProgress(80);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUploadProgress(100);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-brand-blue-100 rounded-full flex items-center justify-center mx-auto mb-6" suppressHydrationWarning>
              <CheckCircle2 className="w-8 h-8 text-brand-blue-700" suppressHydrationWarning />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-3">Application Submitted!</h3>
            <p className="text-brand-navy/75 mb-6">
              Thank you for your interest in joining our team. We'll review your application
              and contact you within 5-7 business days.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
                setResumeFile(null);
              }}
              variant="outline"
            >
              Submit Another Application
            </Button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="app-name">Full Name *</Label>
                <Input
                  id="app-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="app-email">Email Address *</Label>
                <Input
                  id="app-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="h-12"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-phone">Phone Number *</Label>
              <Input
                id="app-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(207) 252-8470"
                required
                className="h-12"
              />
            </div>
            
            {/* Resume Upload */}
            <div className="space-y-2">
              <Label>Resume/CV *</Label>
              {!resumeFile ? (
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    required
                    aria-label="Upload resume file, PDF DOC or DOCX format"
                  />
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-brand-blue-400 transition-colors">
                    <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" suppressHydrationWarning />
                    <p className="text-brand-navy/75 font-medium">Click to upload your resume</p>
                    <p className="text-sm text-brand-navy/60 mt-1">PDF, DOC, or DOCX (Max 10MB)</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-brand-blue-50 border border-brand-blue-200 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue-100 rounded-lg flex items-center justify-center" suppressHydrationWarning>
                      <FileText className="w-5 h-5 text-brand-blue-700" suppressHydrationWarning />
                    </div>
                    <div>
                      <p className="font-medium text-brand-navy truncate max-w-[200px]">
                        {resumeFile.name}
                      </p>
                      <p className="text-sm text-brand-navy/60">
                        {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-2 hover:bg-brand-blue-100 rounded-lg transition-colors"
                    aria-label="Remove uploaded file"
                  >
                    <X className="w-5 h-5 text-gray-500" suppressHydrationWarning aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="app-message">Cover Letter / Additional Information</Label>
              <Textarea
                id="app-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your experience and why you'd like to join our team..."
                className="min-h-[150px] resize-none"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting || !resumeFile}
              className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" suppressHydrationWarning />
                  Submitting... {uploadProgress}%
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5 mr-2" suppressHydrationWarning />
                  Submit Application
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}