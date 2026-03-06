'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle2, Loader2, FileText, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function ClientIntakeUploadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [intakeFile, setIntakeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIntakeFile(file);
    }
  };

  const removeFile = () => {
    setIntakeFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (intakeFile) {
      setUploadProgress(30);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUploadProgress(60);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUploadProgress(100);

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setUploadProgress(0);
      setFormData({ name: '', email: '', phone: '' });
      setIntakeFile(null);
    }, 4000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-brand-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-brand-blue-700" suppressHydrationWarning />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-3">Intake Form Uploaded!</h3>
            <p className="text-brand-navy/75 mb-6">
              Thank you. A care coordinator will review your intake form and reach out soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="space-y-3">
              <Label>Upload Completed Intake Form</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-brand-blue-500 transition-colors relative">
                <div className="text-center">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" suppressHydrationWarning />
                  {intakeFile ? (
                    <div className="flex items-center justify-center gap-3">
                      <FileText className="w-5 h-5 text-brand-blue-700" suppressHydrationWarning />
                      <span className="text-brand-navy font-medium truncate max-w-[240px]">{intakeFile.name}</span>
                      <button type="button" onClick={removeFile} className="text-gray-500 hover:text-gray-700" aria-label="Remove uploaded file">
                        <X className="w-5 h-5" suppressHydrationWarning aria-hidden="true" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-brand-navy/75 font-medium">Click to upload your completed intake form</p>
                      <p className="text-sm text-brand-navy/60 mt-1">PDF (Max 10MB)</p>
                    </>
                  )}
                </div>

                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  required
                  aria-label="Upload completed intake form, PDF format"
                />
              </div>
            </div>

            {isSubmitting && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                <div className="flex justify-between text-sm text-brand-navy/75">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-brand-blue-700 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 hover:from-brand-blue-700 hover:to-brand-blue-600 text-white py-3 rounded-full font-semibold transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" suppressHydrationWarning />
                  Submitting...
                </>
              ) : (
                'Upload Intake Form'
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
